/*global describe:true, it:true, before:true, after:true */

var
    demand    = require('must'),
    sinon     = require('sinon'),
    Grill     = require('./index'),
    endpoints = require('./endpoints')
;

describe('emancipation-grill', function()
{
    describe('exports', function()
    {
        it('exports a constructor', function()
        {
            Grill.must.be.a.function();
        });
    });

    describe('constructor', function()
    {
        it('requires an options object', function()
        {
            function shouldThrow()
                { return new Grill(); }
            shouldThrow.must.throw(/options object/);
        });

        it('can be constructed', function()
        {
            var g = new Grill({ host: 'http://localhost:4444' });
            g.must.be.an.object();
            g.must.be.instanceof(Grill);
            g.must.have.property('sealed');
            g.sealed.must.be.a.function();
        });
    });

    describe('functions', function()
    {
        it('has tests');
    });
});
