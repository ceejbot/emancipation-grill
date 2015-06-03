# emancipation-grill

A pure JavaScript node client for [Hashicorp's Vault](https://hashicorp.com/blog/vault.html).

[![on npm](http://img.shields.io/npm/v/emancipation-grill.svg?style=flat)](https://www.npmjs.org/package/emancipation-grill)  [![Tests](http://img.shields.io/travis/ceejbot/emancipation-grill.svg?style=flat)](http://travis-ci.org/ceejbot/emancipation-grill)  ![Coverage](http://img.shields.io/badge/coverage-100%25-green.svg?style=flat)   [![Dependencies](http://img.shields.io/david/ceejbot/emancipation-grill.svg?style=flat)](https://david-dm.org/ceejbot/emancipation-grill) ![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat)

## Usage

All functions return a promise if a callback is not provided. All functions have the following signature:

```
grill.funcname(params, callback);
```

The `params` object must contain both fields required by the Vault API and any variables for substitution into the URI path.


## API

### initialized()

[GET /sys/init](http://vaultproject.io/docs/http/sys-init.html)

### initialize()

[PUT /sys/init](http://vaultproject.io/docs/http/sys-init.html)


### sealed()

[GET /sys/seal-status](http://vaultproject.io/docs/http/sys-seal-status.html)

No parameters.

### unseal()

[PUT /sys/unseal](http://vaultproject.io/docs/http/sys-unseal.html)

Requires `secret_shares` and `key` params.

### seal()

[PUT /sys/seal](http://vaultproject.io/docs/http/sys-seal.html)

No parameters, no response body.

### mounts()

[GET /sys/mount](http://vaultproject.io/docs/http/sys-mounts.html)

No parameters.

### mount()

[PUT /sys/mount/:backend](http://vaultproject.io/docs/http/sys-mounts.html)

```
grill.mount({ backend: 'aws' }, function(err, res) { });
```


### unmount()

[DELETE /sys/mount/:backend](http://vaultproject.io/docs/http/sys-mounts.html)

{ backend: 'aws' }


### remount()

POST /sys/remount
http://vaultproject.io/docs/http/sys-remount.html


### policies()

GET /sys/policy
http://vaultproject.io/docs/http/sys-policy.html


### addPolicy()

http://vaultproject.io/docs/http/sys-policy.html

PUT /sys/policy/:policy
{ policy: 'policy-name' }

### removePolicy()

http://vaultproject.io/docs/http/sys-policy.html

DELETE /sys/policy/:policy

{ policy: 'policy-name' }

### renewLease()

renewLease: { method: 'PUT', path: [Function] },


{ lease: 'lease-name' }

### revokeLease()

revokeLease: { method: 'PUT', path: [Function] },

{ lease: 'lease-name' }

### revokePrefix()

revokePrefix: { method: 'PUT', path: [Function] },

{ prefix: 'my-prefix' }

### audits()

audits: { path: [Function] },

### enableAudit()

enableAudit: { method: 'PUT', path: [Function] },

{ backend: 'aws' }

### disableAudit()

disableAudit: { method: 'DELETE', path: [Function] } }

{ backend: 'aws' }


## LICENSE

ISC
