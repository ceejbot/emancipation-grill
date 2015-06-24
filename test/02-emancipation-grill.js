/*global describe:true, it:true, before:true, after:true */

var
    demand    = require('must'),
    Grill     = require('../index'),
    endpoints = require('../lib/endpoints'),
    env       = require('node-env-file')
;

env(__dirname + '/../.env');

describe('emancipation-grill', function()
{
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
                demand(err).not.exist();
                results.must.be.an.object();
                results.must.have.property('sys/');
                results.must.have.property('secret/');
                done();
            });
        });

        it('must be able to write a secret', function(done)
        {
            g.writeSecret('test1', { foo: 'bar'}, function(err)
            {
                demand(err).not.exist();
                done();
            });
        });

        it('must be able to read a secret', function(done)
        {
            g.readSecret('test1', function(err, secret)
            {
                demand(err).not.exist();
                secret.must.be.an.object();
                secret.must.be.instanceof(Grill.Secret);
                secret.must.have.property('lease_id');
                secret.must.have.property('renewable');
                secret.must.have.property('lease_duration');
                secret.must.have.property('auth');
                secret.must.have.property('data');
                secret.data.must.be.an.object();
                secret.data.must.have.property('foo');
                secret.data.foo.must.equal('bar');
                done();
            });
        });

        it('must be able to delete a secret', function(done)
        {
            g.deleteSecret('test1', function(err)
            {
                demand(err).not.exist();
                g.read('test1', function(err, secret)
                {
                    err.must.exist();
                    err.must.match(/404/);
                    done();
                });
            });
        });

        it('health() works', function(done)
        {
            g.health().then(function(result)
            {
                result.must.be.an.object();
                result.must.have.property('initialized');
                result.initialized.must.be.true();
                done();
            }).done();
        });
    });
});
