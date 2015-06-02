var
    assert    = require('assert'),
    P         = require('bluebird'),
    Request   = require('client-request'),
    endpoints = require('./endpoints')
    ;

var Grill = module.exports = function Grill(opts)
{
    // TODO for each command, generate a function
};

Grill.prototype.makeRequest = function makeRequest(command, opts, callback)
{
    // TODO turn opts into full options to pass to Request, with path sub


    Request(opts, function(err, res, body)
    {

    });
};
