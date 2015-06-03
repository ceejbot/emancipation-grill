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
    mounts:
    {
        path: function(opts) { return '/sys/mounts'; }
    },
    mount:
    {
        method: 'PUT',
        path: function(opts) { return `/sys/mounts/${opts.backend}`; }
    },
    unmount:
    {
        method: 'DELETE',
        path: function(opts) { return `/sys/mounts/${opts.backend}`; }
    },
    remount:
    {
        method: 'POST',
        path: function(opts) { return '/sys/remount'; }
    },
    policies:
    {
        path: function(opts) { return '/sys/policy'; }
    },
    addPolicy:
    {
        method: 'PUT',
        path: function(opts) { return `/sys/policy/${opts.policy}`; }
    },
    removePolicy:
    {
        method: 'DELETE',
        path: function(opts) { return `sys/policy/${opts.policy}`; }
    },
    renewLease:
    {
        method: 'PUT',
        path: function(opts) { return `/sys/renew/${opts.lease}`; }
    },
    revokeLease:
    {
        method: 'PUT',
        path: function(opts) { return `/sys/revoke/${opts.lease}`; }
    },
    revokePrefix:
    {
        method: 'PUT',
        path: function(opts) { return `/sys/revoke-prefix/${opts.prefix}`; }
    },
    audits:
    {
        path: function(opts) { return '/sys/audit'; }
    },
    enableAudit:
    {
        method: 'PUT',
        path: function(opts) { return `/sys/audit/${opts.backend}`; }
    },
    disableAudit:
    {
        method: 'DELETE',
        path: function(opts) { return `/sys/audit/${opts.backend}`; }
    },
};
