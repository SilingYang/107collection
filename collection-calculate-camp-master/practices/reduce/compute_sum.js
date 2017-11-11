'use strict';

function calculate_elements_sum(collection) {
  /*let s=0;
  for(let i=0;i<collection.length;i++)
  {
    s+=collection[i];
  }
  return s;*/
  return eval(collection.join("+"));
}

module.exports = calculate_elements_sum;

