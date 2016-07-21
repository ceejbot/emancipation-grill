var
	assign = require('lodash.assign')
;

var Secret = module.exports = function Secret(data)
{
	assign(this, data);
};

Secret.prototype.lease_id = null;
Secret.prototype.renewable = null;
Secret.prototype.lease_duration = false;
Secret.prototype.auth = null;
Secret.prototype.data = null;
