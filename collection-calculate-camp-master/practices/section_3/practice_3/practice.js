function create_updated_collection(collection_a, object_b) {
  let result=[];
  let j=0;
  let p;
  for(let i=0;i<collection_a.length;i++)
  {
      if(i==collection_a.indexOf(collection_a[i]))//字符第一次出现
      { 
        result[j]={ key:collection_a[i], count:1}
        j++;
      }
      else
      {  
        result[j-1].count++;
      }
  } 
 
  let temp=[];
  temp=object_b.value;
 
  for(let i=0;i<temp.length;i++)
    for(let j=0;j<result.length;j++)
       if(temp[i]==result[j].key)
        {
          p=result[j].count;
          result[j].count=p-parseInt(p/3);
        }
 
  return result;
}

module.exports = create_updated_collection;
