'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var result=new Array();
  var c=objectB.value;
  for(var i=0;i<collectionA.length;i++)
  {
      for(var j=0;j<c.length;j++)
      {
        if(collectionA[i]==c[j])
        {
          result.push(collectionA[i]);
          break;
        }
      }
    
  }
  return result;
}
