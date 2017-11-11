'use strict';

function compute_average(collection) {
  let sum=eval(collection.join("+"));
  return ~~(sum/collection.length*100)/100;
}

module.exports = compute_average;

