'use strict';
var single_element = function(collection){

    let temp=[];
    let result=[];
    for(let i=1;i<collection.length;i+=2)
    {
        temp.push(collection[i]);
    }
    for(let i=0;i<temp.length;i++)
    {
        if(temp.lastIndexOf(temp[i])==temp.indexOf(temp[i]))
        {
            result.push(temp[i]);
        }
    }
    return result;
};
module.exports = single_element;
