'use strict';

function compute_chain_median(collection) {
  let array=collection.split('->').sort(function(a,b){
    return a-b;
  })
  let lowMiddle=Math.floor((array.length-1)/2);
  let highMiddle=Math.ceil((array.length-1)/2);
  return (Number(array[lowMiddle])+Number(array[highMiddle]))/2;
}

module.exports = compute_chain_median;
