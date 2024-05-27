'use strict';

/**
 * Adds commas to a number
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @param {number} multipleBy
 * @return {string}
 */

module.exports = function(firstNumber, secondNumber, multipleBy) {

	return Math.abs( ( firstNumber * multipleBy) - Math.round( secondNumber * multipleBy ) ) * multipleBy;

};

