function create_updated_collection(collection_a, object_b) {
  let temp=[];
  temp=object_b.value;
  for(let i=0;i<temp.length;i++)
  {
    for(let j=0;j<collection_a.length;j++)
    {
      if(temp[i]==collection_a[j].key)
      {
        collection_a[j].count--;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
