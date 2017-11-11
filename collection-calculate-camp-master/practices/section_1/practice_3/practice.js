function collect_same_elements(collection_a, object_b) {
  var result=new Array();
  var c=object_b.value;
  for(var i=0;i<collection_a.length;i++)
  {
      for(var j=0;j<c.length;j++)
      {
        if(collection_a[i]==c[j])
        {
          result.push(collection_a[i]);
          break;
        }
      }
    
  }
  return result;
}

module.exports = collect_same_elements;
