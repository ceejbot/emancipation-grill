/*global describe:true, it:true, before:true, after:true */

var
	demand = require('must'),
	Secret = require('../lib/secret')
	;

describe('Secret', function()
{
	it('has tests');

	it('can be constructed', function()
	{
		var s = new Secret({});
		s.must.be.an.object();
		s.must.be.instanceof(Secret);
	});
});
