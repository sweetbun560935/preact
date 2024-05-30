'use strict';
var _math = require('round-floor-ceil');
var _differenceBetween_with_offset_value = require('./bias-in-place-value/difference-between-numbers-multiplied');
var _fix_js_math_by_avoiding_float_math = require('./bias-in-place-value/fix-javascript-arithmetic-by-avoid-tenths-place-math.1');

/**
 * Adds commas to a number
 * @param {number} givenNumber
 * @param {number} biasNumber
 * @param {number} tenth
 * @return {string}
 */
module.exports = function(givenNumber, tenth, biasNumber) {
	if (!biasNumber) biasNumber = 5;
	if (!tenth) tenth = 0;
	var _offset_value = _fix_js_math_by_avoiding_float_math(tenth);

	var _floor =  _math.floor10(givenNumber, tenth);

	var _bias_number_with_offset_value =  biasNumber * _offset_value;
	
	if ( _differenceBetween_with_offset_value(givenNumber, _floor, _offset_value) >= _bias_number_with_offset_value ) {

		return _math.ceil10(givenNumber, tenth);

	} 

	return _floor;

};