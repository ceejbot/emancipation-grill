var
    _         = require('lodash'),
    assert    = require('assert'),
    P         = require('bluebird'),
    Request   = require('request'),
    endpoints = require('./endpoints')
;

var Grill = module.exports = function Grill(opts)
{
    assert(process.env.VAULT_ADDR, 'you must set the VAULT_ADDR environment variable');
    assert(process.env.VAULT_TOKEN, 'you must set the VAULT_TOKEN environment variable');

    this.host = process.env.VAULT_ADDR;
    this.token = process.env.VAULT_TOKEN;

    this.request = Request.defaults(
    {
        jar: true,
        headers: { 'X-Vault-Token': this.token }
    });

    var self = this;

    _.each(endpoints, function(v, k)
    {
        var func = self.makeCommand(k, v);
        self[k] = P.promisify(func).bind(self);
    });

    _.each(Grill.functions, function(k)
    {
        self[k] = P.promisify(self['_' + k]).bind(self);
    });
};

Grill.prototype.version = 'v1';

// Not auto-generated, but need binding.
Grill.functions = [ 'health', 'github', 'mapGithubTeam' ];

Grill.prototype.makeCommand = function makeCommand(command, params)
{
    var func = function(name, data, callback)
    {
        if (typeof data === 'function')
        {
            callback = data;
            data = {};
        }

        var ropts =
        {
            method: params.method || 'GET',
            uri:    `${this.host}/${this.version}${params.path(name)}`,
            json:   true,
        };

        if (ropts.method === 'POST' || ropts.method === 'PUT')
            ropts.body = data;

        this.request(ropts, function(err, res, body)
        {
            if (err)
                return callback(err);

            console.log(body)

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
    this.request.get(`${this.host}/${this.version}/sys/health`, function(err, res, body)
    {
        if (err) return callback(err);
        if (res.statusCode === 200 || res.statusCode === 429 || res.statusCode === 500)
            return callback(null, body);
        callback(new Error(`unexpected status code ${res.statusCode}`));
    });
};

Grill.prototype._github = function _github(organization, callback)
{
    // enable
    // then set config
};

Grill.prototype._mapGithubTeam = function _mapGithubTeam(team, policy, callback)
{
    // /auth/github/map/teams/:owners value=:policy
};
