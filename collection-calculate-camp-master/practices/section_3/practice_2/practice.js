function create_updated_collection(collection_a, object_b) {
  let temp=[];
  temp=object_b.value;
  let num;
  for(let i=0;i<temp.length;i++)
    for(let j=0;j<collection_a.length;j++)
      if(temp[i]==collection_a[j].key)
      {
        num=collection_a[j].count;
        collection_a[j].count=num-parseInt(num/3);
      }
       
  return collection_a;  
}

module.exports = create_updated_collection;
