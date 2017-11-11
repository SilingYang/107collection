'use strict';

function amount_even(collection) {

  let res=0;
  for(let i=0;i<=collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      res+=collection[i];
    }
  }
  return res;
}

module.exports = amount_even;
