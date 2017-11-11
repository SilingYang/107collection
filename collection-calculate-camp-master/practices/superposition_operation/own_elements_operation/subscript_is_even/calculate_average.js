'use strict';
var calculate_average = function(collection){
    let result=0;
    let j=0;
    for(let i=1;i<collection.length;i+=2)
    {
        result+=collection[i];
        j++;
    }
    return result/j;
};
module.exports = calculate_average;
