/*global describe:true, it:true, before:true, after:true */

var
	demand    = require('must'),
	Grill     = require('../index')
	;

describe('exports', function()
{
	it('exports a constructor', function()
	{
		Grill.must.be.a.function();
	});

	it('exports a secret construtor', function()
	{
		Grill.must.have.property('Secret');
		Grill.Secret.must.be.a.function();
	});
});
