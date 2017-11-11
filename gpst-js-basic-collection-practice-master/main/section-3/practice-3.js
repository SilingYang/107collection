'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result=[];
  let j=0;
  let p;
  for(let i=0;i<collectionA.length;i++)
  {
      if(i==collectionA.indexOf(collectionA[i]))//字符第一次出现
      { 
        result[j]={ key:collectionA[i], count:1}
        j++;
      }
      else
      {  
        result[j-1].count++;
      }
  } 
 
  let temp=[];
  temp=objectB.value;
 
  for(let i=0;i<temp.length;i++)
    for(let j=0;j<result.length;j++)
       if(temp[i]==result[j].key)
        {
          p=result[j].count;
          result[j].count=p-parseInt(p/3);
        }
 
  return result;
}
