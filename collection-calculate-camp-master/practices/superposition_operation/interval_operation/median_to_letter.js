'use strict';

function median_to_letter(collection) {
  let array=collection.sort(function(a,b){
    return a-b;
  });
  let result;
  if(collection.length%2==0)
  {
    let lowMiddle=Math.floor((array.length-1)/2);
    let highMiddle=Math.ceil((array.length-1)/2);
    result=Math.ceil((Number(array[lowMiddle])+Number(array[highMiddle]))/2);
  }
  else{
    result=Math.ceil(array[(array.length-1)/2]);
  }
  if(result<27)
  {
    result=String.fromCharCode(96+result);
    
  }
  else{
    let fir=(result-27)/26;
    let sec=(result-27)%26;
    result=String.fromCharCode(97+fir)+String.fromCharCode(97+sec);
  }
  return result;
  
}

module.exports = median_to_letter;
