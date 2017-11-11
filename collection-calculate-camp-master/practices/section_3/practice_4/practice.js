function create_updated_collection(collection_a, object_b) {
  let result=[];
  let j=0;
 let temp=[];
 
 
  for(let i=0;i<collection_a.length;i++)
  {
    if(collection_a[i].length==1)
    {
       if(i==collection_a.indexOf(collection_a[i]))
       { 
         result[j]={ key:collection_a[i], count:1};   
         temp.push(collection_a[i]); 
         j++;
       }
      else
      {  
        result[temp.indexOf(collection_a[i])].count++;
      }
    }//适用单个字符的方法
 
    if(collection_a[i].length==3)
    {
        if(temp.indexOf( collection_a[i].charAt(0) ) !==-1  )
        {
           let p=temp.indexOf( collection_a[i].charAt(0) );
           let m=parseInt(collection_a[i].charAt(2));
           result[p].count=result[p]+m;
        }
        else 
           result[j]={ key:collection_a[i].charAt(0), 
           count:parseInt(collection_a[i].charAt(2))};
     }
 
  }
 
  let array=[];
  array=object_b.value;
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

module.exports = create_updated_collection;
