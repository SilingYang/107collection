'use strict';

function spilt_to_zero(number, interval) {
  let result=[];
  result.push(number);
  let num=0;
  while(result[result.length-1]>0)
  {
    num=result[result.length-1]-interval;
    num=Number(num.toFixed(1));
    result.push(num);
  }
  return result;
}

module.exports = spilt_to_zero;
