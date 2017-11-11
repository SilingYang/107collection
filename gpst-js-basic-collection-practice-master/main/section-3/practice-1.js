'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let temp=[];
  temp=objectB.value;

  for(let i=0;i<temp.length;i++)
    for(let j=0;j<collectionA.length;j++)
      if(temp[i]==collectionA[j].key)
        collectionA[j].count--;

  return collectionA;   
}
