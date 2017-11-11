'use strict';

function find_first_even(collection) {
  let res;
  for(let i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      res=collection[i];
      return res;
    }
  }
  return "not find";
  
}

module.exports = find_first_even;

