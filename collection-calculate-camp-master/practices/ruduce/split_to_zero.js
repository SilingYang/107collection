'use strict';

function spilt_to_zero(number, interval) {
  let result=[];
  result.push(number);
  let num=0;
  while(result[result.length-1]>0)
  {
    num=result[result.length-1]-interval;
    result.push(num);
  }
  return result;
}

console.log(spilt_to_zero(1,0.2));

module.exports = spilt_to_zero;
