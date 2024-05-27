'use strict';

var _absoulte_value = require('./absolute-value');

/**
 * Adds commas to a number
 * @param {number} number
 * @return {string}
 */

module.exports = function(number) {

	return Math.pow(10, _absoulte_value(number) + 1);

};

