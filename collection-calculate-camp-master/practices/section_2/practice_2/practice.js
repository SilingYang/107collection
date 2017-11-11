function count_same_elements(collection) {
  let result=[];
  let j=0;
  let temp=[];//把数组中出现的元素放入（重复元素只放一次）
 
 
  for(let i=0;i<collection.length;i++)
  {
      if(collection[i].length==1)//单个字符
      {
        if(i==collection.indexOf(collection[i]))//字符第一次出现
        { 
          result[j]={ key:collection[i], count:1};   
          temp.push(collection[i]); 
          j++;
        }
       else//字符重复出现时
       {  
         result[temp.indexOf(collection[i])].count++;
       }
      }
 
     if(collection[i].length==3)//出现三字符情况下
     {
        if(temp.indexOf( collection[i].charAt(0) ) !==-1  )//该字符重复出现
        {  
           let c=temp.indexOf( collection[i].charAt(0) );
           let num=parseInt(collection[i].charAt(2));
           result[c].count=result[c]+num;
        }
        else //字符第一次出现
            result[j]={ key:collection[i].charAt(0), count:parseInt(collection[i].charAt(2))};
     }
  }
  return result;
}

module.exports = count_same_elements;
