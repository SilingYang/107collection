'use strict';

function average_to_letter(collection) {

  let res;
  let s=0;
  for(let i=0;i<collection.length;i++)
  {
    s+=collection[i];
  }

  res=Math.ceil(s/collection.length);
  return String.fromCharCode(96+res);
}

module.exports = average_to_letter;

