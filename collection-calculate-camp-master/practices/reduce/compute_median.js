'use strict';

function compute_median(collection) {
  let array=collection.sort(function(a,b){
    return a-b;
  })
  let result;
  if(collection.length%2==0)
  {
    let lowMiddle=Math.floor((array.length-1)/2);
    let highMiddle=Math.ceil((array.length-1)/2);
    result=(Number(array[lowMiddle])+Number(array[highMiddle]))/2;
  }
  else{
    result=(array[(array.length-1)/2]);
  }
  return result;
}

module.exports = compute_median;


