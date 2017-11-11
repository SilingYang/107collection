'use strict';

function double_to_one(collection) {

  let result=[];
  let res=[];
  let j=0;
  result=[].concat.apply([],collection);
  for(let i=0;i<result.length;i++)
  {
    if(i==result.indexOf(result[i]))
    {
      res[j++]=result[i];
    }
  
  }
  return res;
}

module.exports = double_to_one;
