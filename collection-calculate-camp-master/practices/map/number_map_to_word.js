'use strict';
var number_map_to_word = function(collection){
  let result=[];
  for(let i=0;i<collection.length;i++)
  {
    result.push(String.fromCharCode(96+collection[i]));
  }
  return result;
};

module.exports = number_map_to_word;
