var
    _         = require('lodash'),
    assert    = require('assert'),
    P         = require('bluebird'),
    Request   = require('request'),
    endpoints = require('./endpoints')
;

var Grill = module.exports = function Grill(opts)
{
    assert(_.isObject(opts), 'you must pass an options object to the constructor');
    assert(opts.host && _.isString(opts.host), 'you must pass a host uri in opts.host');

    this.host = opts.host;

    var self = this;

    _.each(endpoints, function(v, k)
    {
        var func = self.makeCommand(k, v);
        self[k] = P.promisify(func).bind(self);
    });

    this.health = P.promisify(this._health).bind(this);
};

Grill.prototype.makeCommand = function makeCommand(command, params)
{
    var func = function(opts, callback)
    {
        var ropts =
        {
            method: params.method || 'GET',
            uri:    `${this.host}/v1${params.path(opts)}`,
            json:   true,
        };

        if (ropts.method === 'PUT')
            ropts.body = opts;

        // TODO auth using Request.jar() to snag a cookie

        Request(ropts, function(err, res, body)
        {
            if (err)
                return callback(err);

            if (res.statusCode >= 400)
                return callback(new Error(`unexpected status code ${res.statusCode}`));

            // TODO should handle other common status code responses

            callback(null, body);
        });
    };

    return func;
};

Grill.prototype._health = function _health(callback)
{
    Request(`${this.host}/v1/sys/health`, function(err, res, body)
    {
        if (err) return callback(err);
        if (res.statusCode === 200 || res.statusCode === 429 || res.statusCode === 500)
            return callback(null, body);
        callback(new Error(`unexpected status code ${res.statusCode}`));
    });
};
