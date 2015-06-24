# emancipation-grill

A pure JavaScript node client for [Hashicorp's Vault](https://hashicorp.com/blog/vault.html).

[![on npm](http://img.shields.io/npm/v/emancipation-grill.svg?style=flat)](https://www.npmjs.org/package/emancipation-grill)  [![Tests](http://img.shields.io/travis/ceejbot/emancipation-grill.svg?style=flat)](http://travis-ci.org/ceejbot/emancipation-grill)  ![Coverage](http://img.shields.io/badge/coverage-%3F%3F%25-lightgray.svg?style=flat)   [![Dependencies](http://img.shields.io/david/ceejbot/emancipation-grill.svg?style=flat)](https://david-dm.org/ceejbot/emancipation-grill) ![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat)

## Usage

All functions return a promise if a callback is not provided. All functions have the following signature:

```javascript
grill.funcname(name, dataObj, callbackFunc);
```

The `name` param is substituted into the url path. The `dataObj` parameter is an optional object containing any data required for PUT or POST operations on the Vault api.

```javascript
var grill = new EmancipationGrill();

grill.initialized()
.then(function(response)
{
    return grill.read('secret/apikey');
})
.then(function(key)
{
    // do something with the key
}).done();


grill.removePolicy('policy-name', function(err, res) { });
grill.addPolicy('policy-name', { policy: 'data here'}, function(err, res) { });
grill.mount('aws', {}, function(err, res) { });
grill.unmount('aws', function(err, res) { });
```

## API

The implemented functions:

| Grill function | Vault API endpoint | notes |
| --- | --- | --- |
| `read()` |  | read a secret
| `write()` |  | write a secret
| `delete()` |  | delete a secret
| `readSecret()` |  | read a secret from the `/secret` path
| `writeSecret()` |  | write a secret to the `/secret` path
| `deleteSecret()` |  | delete a secret from the `/secret` path
| `initialized()` | [GET /sys/init](http://vaultproject.io/docs/http/sys-init.html) | No parameters.
| `initialize()` | [PUT /sys/init](http://vaultproject.io/docs/http/sys-init.html) | Requires payload.
| `sealed()` | [GET /sys/seal-status](http://vaultproject.io/docs/http/sys-seal-status.html) | No parameters.
| `unseal()` | [PUT /sys/unseal](http://vaultproject.io/docs/http/sys-unseal.html)|  Requires `secret_shares` and `key` params in payload.
| `seal()` | [PUT /sys/seal](http://vaultproject.io/docs/http/sys-seal.html) | No parameters, no response body.
| `mounts()` | [GET /sys/mount](http://vaultproject.io/docs/http/sys-mounts.html) | No parameters.
| `mount()` | [PUT /sys/mount/:backend](http://vaultproject.io/docs/http/sys-mounts.html)
| `unmount()` | [DELETE /sys/mount/:backend](http://vaultproject.io/docs/http/sys-mounts.html)
| `remount()` | [POST /sys/remount](http://vaultproject.io/docs/http/sys-remount.html)
| `policies()` | [GET /sys/policy](http://vaultproject.io/docs/http/sys-policy.html)
| `addPolicy()` | [PUT /sys/policy/:policy](http://vaultproject.io/docs/http/sys-policy.html)
| `removePolicy()` | [DELETE /sys/policy/:policy](http://vaultproject.io/docs/http/sys-policy.html)
| `renewLease()` | [PUT sys/renew/:leaseid](http://vaultproject.io/docs/http/sys-renew.html)
| `revokeLease()` | [PUT /sys/revoke/:leaseid](http://vaultproject.io/docs/http/sys-revoke.html)
| `revokePrefix()` | [PUT /sys/revoke-prefix/:pathprefix](http://vaultproject.io/docs/http/sys-revoke-prefix.html)
| `audits()` | [GET /sys/audit](http://vaultproject.io/docs/http/sys-audit.html)
| `enableAudit()` | [PUT /sys/audit/:backend](http://vaultproject.io/docs/http/sys-audit.html)
| `disableAudit()` | [DELETE /sys/audit/:backend](http://vaultproject.io/docs/http/sys-audit.html)
| `health()` | | respond with service health object
| `github()` | | UNIMPLEMENTED TODO
| `mapGithubTeam()` | | UNIMPLEMENTED TODO


## TODO

* finish off the api
* unsealing?

## LICENSE

ISC
