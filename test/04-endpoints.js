/*global describe:true, it:true, before:true, after:true */

var
    _         = require('lodash'),
    demand    = require('must'),
    Endpoints = require('../lib/endpoints')
;

describe('endpoints', function()
{
    it('has tests');

    it('exports an object', function()
    {
        Endpoints.must.be.an.object();
        Object.keys(Endpoints).length.must.be.above(1);
    });

    it('each entry has an arity and a path', function()
    {
        _.each(Endpoints, function(v, k)
        {
            var method = Endpoints[k];
            method.must.have.property('arity');
            method.arity.must.be.a.number();
            method.must.have.property('path');
            method.path.must.be.a.function();
        });
    });

    it('the path function returns a string', function()
    {
        _.each(Endpoints, function(method, k)
        {
            method.path('foo').must.be.a.string();
        });

    });
});
