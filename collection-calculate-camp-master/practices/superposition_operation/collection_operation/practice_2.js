'use strict';

function hybrid_operation_to_uneven(collection) {

  let result=[];
  let j=0;
  for(let i=0;i<collection.length;i++)
  {
    if(collection[i]%2){
      result.push(collection[i]*3+2);
      j++;
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

