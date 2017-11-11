'use strict';

function average_uneven(collection) {

  let res=0;
  let j=0;
  for(let i=0;i<=collection.length;i++)
  {
    if(collection[i]%2)
    {
      res+=collection[i];
      j++;
    }
  }
  return res/j;
}

module.exports = average_uneven;
