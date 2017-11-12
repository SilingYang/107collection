'use strict';

function grouping_count(collection) {

  let result=new Map();
  for(let i=0;i<collection.length;i++)
  {
    if(!result.has(collection[i]))//该元素第一次出现
    {
      result.set(collection[i],1);
    }
    else
    {
      result.set(collection[i],result.get(collection[i])+1);
    }
  }
  let re = {};
  for(let [key,value] of result.entries()){
    re[key]=value;
  }
  return re;
}
console.log(grouping_count([1,1,1,1,2,3,1,3,4,2,3,1,3,4,2]));

module.exports = grouping_count;
