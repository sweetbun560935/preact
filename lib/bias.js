'use strict';

var _differenceBetween = require('./bias/difference-between-numbers');

/**
 * Adds commas to a number
 * @param {number} givenNumber
 * @param {number} biasNumber
 * @return {string}
 */

module.exports = function(givenNumber, biasNumber) {
	if (!biasNumber) biasNumber = 5;
	var _floor =  Math.floor(givenNumber);

	if ( _differenceBetween(givenNumber, _floor) >= biasNumber) {

		return Math.ceil(givenNumber);

	} 

	return _floor;
};