'use strict';
var bias = require('./lib/bias');
var biasIn = require('./lib/bias-in-place-value');
/**
 * Adds commas to a number
 * @param {number} givenNumber
 * @param {number} biasNumber
 * @return {string}
 */
module.exports = {
  bias: function(givenNumber, biasNumber)  {
    if (!biasNumber) biasNumber = 5;
    return bias(givenNumber, biasNumber);
  },

	biasIn: function(givenNumber, tenth, biasNumber)  {
    if (!biasNumber) biasNumber = 5;
    if (!tenth) tenth = 0;
    return biasIn(givenNumber, tenth, biasNumber);
  }
};