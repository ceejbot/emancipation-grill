/*global describe:true, it:true, before:true, after:true */

var
    demand    = require('must'),
    Grill     = require('./index'),
    endpoints = require('./endpoints')
;

describe('emancipation-grill', function()
{
    var unsealKey = process.env.VAULT_UNSEAL_TEST;


    describe('exports', function()
    {
        it('exports a constructor', function()
        {
            Grill.must.be.a.function();
        });
    });

    describe('constructor', function()
    {
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
        it('must generate a lot of functions for endpoints', function()
        {
            var g = new Grill();

            var verbs = Object.keys(endpoints);
            for (var i = 0; i < verbs.length; i++)
            {
                g.must.have.property(verbs[i]);
                g[verbs[i]].must.be.a.function();
            }
        });
    });

    describe('integration tests', function()
    {
        var g = new Grill();

        it('must be able to list mounted backends', function(done)
        {
            g.mounts(function(err, results)
            {
                console.log(results);
                done();
            });
        });

        it('must be able to write a secret', function(done)
        {
            var g = new Grill();
            done();
        });

        it('must be able to read a secret', function(done)
        {
            done();
        });
    });
});
