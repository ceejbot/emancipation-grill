module.exports =
{
    initialize:
    {
        method: 'PUT',
        path: function(opts) { return '/sys/init'; }
    },
    initialized:
    {
        path: function(opts) { return '/sys/init'; }
    },
    sealed:
    {
        path: function(opts) { return '/sys/seal-status'; }
    },
    unseal:
    {
        method: 'PUT',
        path: function(opts) { return '/sys/seal'; }
    },
    seal:
    {
        method: 'PUT',
        path: function(opts) { return '/sys/seal'; }
    },
    read:
    {
        path: function(secret) { return `/${encodeURIComponent(secret)}`; }
    },
    write:
    {
        method: 'POST',
        path: function(secret) { return `/${encodeURIComponent(secret)}`; }
    },
    delete:
    {
        method: 'DELETE',
        path: function(secret) { return `/${encodeURIComponent(secret)}`; }
    },
    mounts:
    {
        path: function(opts) { return '/sys/mounts'; }
    },
    mount:
    {
        method: 'PUT',
        path: function(param) { return `/sys/mounts/${param}`; }
    },
    unmount:
    {
        method: 'DELETE',
        path: function(param) { return `/sys/mounts/${param}`; }
    },
    remount:
    {
        method: 'POST',
        path: function(opts) { return '/sys/remount'; }
    },
    auths:
    {
        path: function(opts) { return '/sys/auth'; }
    },
    enableAuth:
    {
        method: 'POST',
        path: function(auth) { return `/sys/auth/${auth}`; }
    },
    disableAuth:
    {
        method: 'PUT',
        path: function(auth) { return `/sys/auth/${auth}`; }
    },
    policies:
    {
        path: function(opts) { return '/sys/policy'; }
    },
    addPolicy:
    {
        method: 'PUT',
        path: function(name) { return `/sys/policy/${name}`; }
    },
    removePolicy:
    {
        method: 'DELETE',
        path: function(name) { return `sys/policy/${name}`; }
    },
    renewLease:
    {
        method: 'PUT',
        path: function(name) { return `/sys/renew/${name}`; }
    },
    revokeLease:
    {
        method: 'PUT',
        path: function(name) { return `/sys/revoke/${name}`; }
    },
    revokePrefix:
    {
        method: 'PUT',
        path: function(prefix) { return `/sys/revoke-prefix/${prefix}`; }
    },
    audits:
    {
        path: function(opts) { return '/sys/audit'; }
    },
    enableAudit:
    {
        method: 'PUT',
        path: function(backend) { return `/sys/audit/${backend}`; }
    },
    disableAudit:
    {
        method: 'DELETE',
        path: function(backend) { return `/sys/audit/${backend}`; }
    },
};
