'use strict';
var number_map_to_word_over_26 = function(collection){
  let result=[];
  for(let i=0;i<collection.length;i++)
  {
    if(collection[i]<27)
    {
      result.push(String.fromCharCode(96+collection[i]));
      
    }
    else{
      let fir=(collection[i]-27)/26;
      let sec=(collection[i]-27)%26;
      result.push(String.fromCharCode(97+fir)+String.fromCharCode(97+sec));
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
