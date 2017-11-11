'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let temp=[];
    temp=objectB.value;
    let num;
    for(let i=0;i<temp.length;i++)
      for(let j=0;j<collectionA.length;j++)
        if(temp[i]==collectionA[j].key)
        {
          num=collectionA[j].count;
          collectionA[j].count=num-parseInt(num/3);
        }
         
    return collectionA;  
}
