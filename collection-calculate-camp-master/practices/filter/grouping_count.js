'use strict';

function grouping_count(collection) {

  let result=[];
  let j=0;
  for(let i=0;i<collection.length;i++)
  {
    if(i=collection.indexOf(collection[i]))
    {
      result[j]={key:collection[i],count:1};
      j++;
    }
    else
    {
      result[result.indexOf(collection[i])].count++;
    }
  }
}

module.exports = grouping_count;
