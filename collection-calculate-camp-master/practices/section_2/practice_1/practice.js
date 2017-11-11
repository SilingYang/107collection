function count_same_elements(collection) {
  let result=[];
  let j=0;
  
 
  for(let i=0;i<collection.length;i++)
  {
       if(i==collection.indexOf(collection[i]))
       { 
         result[j]={ key:collection[i], count:1}
         j++;
       }
        else
        {  
          result[j-1].count++;
        }
      
 } 
  return result; 
}

module.exports = count_same_elements;
