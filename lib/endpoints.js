module.exports =
{
    initialize:
    {
        arity: 2,
        method: 'PUT',
        path: function(opts) { return '/sys/init'; },
    },
    initialized:
    {
        arity: 1,
        path: function(opts) { return '/sys/init'; },
    },
    sealed:
    {
        arity: 1,
        path: function(opts) { return '/sys/seal-status'; },
    },
    unseal:
    {
        arity: 2,
        method: 'PUT',
        path: function(opts) { return '/sys/seal'; },
    },
    seal:
    {
        arity: 2,
        method: 'PUT',
        path: function(opts) { return '/sys/seal'; },
    },
    read:
    {
        arity: 2,
        path: function(secret) { return `${encodeURIComponent(secret)}`; }
    },
    write:
    {
        arity: 3,
        method: 'POST',
        path: function(secret) { return `${encodeURIComponent(secret)}`; }
    },
    delete:
    {
        arity: 2,
        method: 'DELETE',
        path: function(secret) { return `${encodeURIComponent(secret)}`; }
    },
    readSecret:
    {
        arity: 2,
        path: function(secret) { return `/secret/${encodeURIComponent(secret)}`; }
    },
    writeSecret:
    {
        arity: 3,
        method: 'POST',
        path: function(secret) { return `/secret/${encodeURIComponent(secret)}`; }
    },
    deleteSecret:
    {
        arity: 2,
        method: 'DELETE',
        path: function(secret) { return `/secret/${encodeURIComponent(secret)}`; }
    },
    mounts:
    {
        arity: 1,
        path: function(opts) { return '/sys/mounts'; }
    },
    mount:
    {
        arity: 3,
        method: 'PUT',
        path: function(param) { return `/sys/mounts/${param}`; }
    },
    unmount:
    {
        arity: 2,
        method: 'DELETE',
        path: function(param) { return `/sys/mounts/${param}`; }
    },
    remount:
    {
        arity: 2,
        method: 'POST',
        path: function(opts) { return '/sys/remount'; }
    },
    auths:
    {
        arity: 1,
        path: function(opts) { return '/sys/auth'; }
    },
    enableAuth:
    {
        arity: 3,
        method: 'POST',
        path: function(auth) { return `/sys/auth/${auth}`; }
    },
    disableAuth:
    {
        arity: 2,
        method: 'DELETE',
        path: function(auth) { return `/sys/auth/${auth}`; }
    },
    policies:
    {
        arity: 1,
        path: function(opts) { return '/sys/policy'; }
    },
    addPolicy:
    {
        arity: 3,
        method: 'PUT',
        path: function(name) { return `/sys/policy/${name}`; }
    },
    removePolicy:
    {
        arity: 2,
        method: 'DELETE',
        path: function(name) { return `sys/policy/${name}`; }
    },
    renewLease:
    {
        arity: 3,
        method: 'PUT',
        path: function(name) { return `/sys/renew/${name}`; }
    },
    revokeLease:
    {
        arity: 2,
        method: 'PUT',
        path: function(name) { return `/sys/revoke/${name}`; }
    },
    revokePrefix:
    {
        arity: 2,
        method: 'PUT',
        path: function(prefix) { return `/sys/revoke-prefix/${prefix}`; }
    },
    audits:
    {
        arity: 1,
        path: function(opts) { return '/sys/audit'; }
    },
    enableAudit:
    {
        arity: 3,
        method: 'PUT',
        path: function(backend) { return `/sys/audit/${backend}`; }
    },
    disableAudit:
    {
        arity: 2,
        method: 'DELETE',
        path: function(backend) { return `/sys/audit/${backend}`; }
    },
};
