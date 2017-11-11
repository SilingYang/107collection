'use strict';
function rank_by_two_large_one_small(collection){
  collection=collection.sort(function(a,b){
    return a-b;
  });
  if(collection.length%3==0)
  {
    for(let i=0;i<collection.length;i=i+3)
    {
      let temp=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=temp;
    }
  }
  else if(collection.length%3==1)
  {
    for(let i=0;i<collection.length-1;i=i+3)
    {
      let temp=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=temp;
    }
  }
  else{
    for(let i=0;i<collection.length-2;i=i+3)
    {
      let temp=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=temp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
