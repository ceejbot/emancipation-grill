module.exports =
{
	initialize:
	{
		arity: 1,
		method: 'PUT',
		path: function(opts) { return '/sys/init'; },
	},
	initialized:
	{
		arity: 0,
		path: function(opts) { return '/sys/init'; },
	},
	sealed:
	{
		arity: 0,
		path: function(opts) { return '/sys/seal-status'; },
	},
	unseal:
	{
		arity: 1,
		method: 'PUT',
		path: function(opts) { return '/sys/seal'; },
	},
	seal:
	{
		arity: 1,
		method: 'PUT',
		path: function(opts) { return '/sys/seal'; },
	},
	read:
	{
		arity: 1,
		secret: true,
		path: function(secret) { return `${encodeURIComponent(secret)}`; }
	},
	write:
	{
		arity: 2,
		method: 'POST',
		path: function(secret) { return `${encodeURIComponent(secret)}`; }
	},
	delete:
	{
		arity: 1,
		method: 'DELETE',
		path: function(secret) { return `${encodeURIComponent(secret)}`; }
	},
	readSecret:
	{
		arity: 1,
		secret: true,
		path: function(secret) { return `/secret/${encodeURIComponent(secret)}`; }
	},
	writeSecret:
	{
		arity: 2,
		method: 'POST',
		path: function(secret) { return `/secret/${encodeURIComponent(secret)}`; }
	},
	deleteSecret:
	{
		arity: 1,
		method: 'DELETE',
		path: function(secret) { return `/secret/${encodeURIComponent(secret)}`; }
	},
	mounts:
	{
		arity: 0,
		path: function(opts) { return '/sys/mounts'; }
	},
	mount:
	{
		arity: 2,
		method: 'PUT',
		path: function(param) { return `/sys/mounts/${param}`; }
	},
	unmount:
	{
		arity: 1,
		method: 'DELETE',
		path: function(param) { return `/sys/mounts/${param}`; }
	},
	remount:
	{
		arity: 1,
		method: 'POST',
		path: function(opts) { return '/sys/remount'; }
	},
	auths:
	{
		arity: 0,
		path: function(opts) { return '/sys/auth'; }
	},
	enableAuth:
	{
		arity: 2,
		method: 'POST',
		path: function(auth) { return `/sys/auth/${auth}`; }
	},
	disableAuth:
	{
		arity: 1,
		method: 'DELETE',
		path: function(auth) { return `/sys/auth/${auth}`; }
	},
	policies:
	{
		arity: 0,
		path: function(opts) { return '/sys/policy'; }
	},
	addPolicy:
	{
		arity: 2,
		method: 'PUT',
		path: function(name) { return `/sys/policy/${name}`; }
	},
	removePolicy:
	{
		arity: 1,
		method: 'DELETE',
		path: function(name) { return `sys/policy/${name}`; }
	},
	renewLease:
	{
		arity: 2,
		method: 'PUT',
		secret: true,
		path: function(name) { return `/sys/renew/${name}`; }
	},
	revokeLease:
	{
		arity: 1,
		method: 'PUT',
		path: function(name) { return `/sys/revoke/${name}`; }
	},
	revokePrefix:
	{
		arity: 1,
		method: 'PUT',
		path: function(prefix) { return `/sys/revoke-prefix/${prefix}`; }
	},
	audits:
	{
		arity: 0,
		path: function(opts) { return '/sys/audit'; }
	},
	enableAudit:
	{
		arity: 2,
		method: 'PUT',
		path: function(backend) { return `/sys/audit/${backend}`; }
	},
	disableAudit:
	{
		arity: 1,
		method: 'DELETE',
		path: function(backend) { return `/sys/audit/${backend}`; }
	},
};
