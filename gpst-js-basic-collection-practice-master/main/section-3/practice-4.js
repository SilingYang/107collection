'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result=[];
  let j=0;
 let temp=[];
 
 
  for(let i=0;i<collectionA.length;i++)
  {
    if(collectionA[i].length==1)
    {
       if(i==collectionA.indexOf(collectionA[i]))
       { 
         result[j]={ key:collectionA[i], count:1};   
         temp.push(collectionA[i]); 
         j++;
       }
      else
      {  
        result[temp.indexOf(collectionA[i])].count++;
      }
    }//适用单个字符的方法
 
    if(collectionA[i].length==3)
    {
        if(temp.indexOf( collectionA[i].charAt(0) ) !==-1  )
        {
           let p=app.indexOf( collectionA[i].charAt(0) );
           let m=parseInt(collectionA[i].charAt(2));
           result[p].count=result[p]+m;
        }
        else 
           result[j]={ key:collectionA[i].charAt(0), 
           count:parseInt(collectionA[i].charAt(2))};
     }
 
  }
 
  let array=[];
  array=objectB.value;
  let p;
 
  for(let x=0;x<array.length;x++)
    for(let y=0;y<result.length;y++)
      if(array[x]==result[y].key)
      {
        p=result[y].count;
        result[y].count=p-parseInt(p/3);
      }

  return result; 
 
}
