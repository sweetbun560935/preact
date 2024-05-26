var expect = require('chai').expect;
var bias = require('../index');

describe('#biasRoundTo with only number given', function() {
	it('should convert number 1.5 to 2', function() {
			var result = bias(1.5);
			expect(result).to.equal(2);
	});
	it('should convert number 1.4 to 1', function() {
		var result = bias.bias(1.4);
		expect(result).to.equal(1);
	});
});	

describe('#biasRoundTo with number and bias given', function() {
	it('should convert number 1.5 to 1 with 6 as bias', function() {
			var result = bias.bias(1.5, 6);
			expect(result).to.equal(1);
	});
	it('should convert number 1.4 to 2 with 4 as bias', function() {
		var result = bias.bias(1.4, 4);
		expect(result).to.equal(2);
	});
});	

describe('#biasRoundToreturn number with thousandth number', function() {
	it('return 55.6', function() {
			var result = bias.biasIn(55.55, -1);
			expect(result).to.equal(55.6);
	});
	it('return .556', function() {
		var result = bias.biasIn(.5555, -3);
		expect(result).to.equal(.556);
	});
});	

describe('#biasRoundToreturn number with thousandth number and bias given', function() {
	it('return 55.6', function() {
			var result = bias.biasIn(55.55, -1, 6);
			expect(result).to.equal(55.5);
	});
	it('return .556', function() {
		var result = bias.biasIn(.5555, -3, 6);
		expect(result).to.equal(.555);
	});
	it('return 55.6', function() {
		var result = bias.biasIn(55.55, -1, 4);
		expect(result).to.equal(55.6);
});
it('return .556', function() {
	var result = bias.biasIn(.5555, -3, 4);
	expect(result).to.equal(.556);
});
});	

