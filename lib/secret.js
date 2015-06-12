var
    _ = require('lodash')
;

var Secret = module.exports = function Secret(data)
{
    _.assign(this, data);
};

Secret.prototype.lease_id = null;
Secret.prototype.renewable = null;
Secret.prototype.lease_duration = false;
Secret.prototype.auth = null;
Secret.prototype.data = null;
