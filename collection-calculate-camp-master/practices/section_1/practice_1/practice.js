function collect_same_elements(collection_a, collection_b) {
  var result=new Array();
  var c=collection_b.toString();
  for(var i=0;i<collection_a.length;i++)
  {
    if(c.indexOf(collection_a[i]).toString()>-1)
    {
      result.push(collection_a[i])
    }
  }
  return result;
}

module.exports = collect_same_elements;
