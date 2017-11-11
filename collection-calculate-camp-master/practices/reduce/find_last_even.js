'use strict';

function find_last_even(collection) {
  let res;
  for(let i=collection.length;i>=0;i--)
  {
    if(collection[i]%2==0)
    {
      res=collection[i];
      return res;
    }
  }
  return "not find";
}

module.exports = find_last_even;
