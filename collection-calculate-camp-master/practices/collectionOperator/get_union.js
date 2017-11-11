'use strict';

function get_union(collection_a, collection_b) {
  for(let i=0;i<collection_b.length;i++)
  {
    let flag=1;
    for(let j=0;j<collection_a.length;j++)
    {
      if(collection_a[j]==collection_b[i])
      {
        flag=0;
      }
    }
    if(flag)
    {
      collection_a.push(collection_b[i]);
    }
  }
  return collection_a;
}

module.exports = get_union;

