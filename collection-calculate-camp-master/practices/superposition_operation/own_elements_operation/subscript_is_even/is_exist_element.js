'use strict';
var is_exist_element = function(collection,element){
    let temp=[];
    for(let i=0;i<collection.length;i+=2)
    {
        temp.push(collection[i]);
    }
    if(temp.indexOf(element)!=-1)
    {
        return true;
    }
    else return false;
};
module.exports = is_exist_element;
