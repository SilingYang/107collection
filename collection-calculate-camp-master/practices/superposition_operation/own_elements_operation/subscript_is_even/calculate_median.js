'use strict';
var calculate_median = function(collection){

let temp=[];
let result;
for(let i=0;i<collection.length;i++)
{
    if(collection[i]%2==0)
    {
        temp.push(collection[i]);
    }
}
temp=temp.sort(function(a,b){
    return a-b;
});
if(temp.length%2==0)
{
  let lowMiddle=Math.floor((temp.length-1)/2);
  let highMiddle=Math.ceil((temp.length-1)/2);
  result=(Number(temp[lowMiddle])+Number(temp[highMiddle]))/2;
}
else{
  result=(temp[(temp.length-1)/2]);
}
return result;
}
module.exports = calculate_median;
