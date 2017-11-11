'use strict';
var even_asc_odd_desc = function(collection){
    let evenarr=[];
    let oddarr=[];
    
    for(let i=0;i<collection.length;i++)
    {
        if(collection[i]%2==0)
        {
            evenarr.push(collection[i]);
        }
        else{
            oddarr.push(collection[i]);
        }
    }
    evenarr=evenarr.sort(function(a,b){
        return a-b;
    });
    oddarr=oddarr.sort(function(a,b){
        return b-a;
    });
    return evenarr.concat(oddarr);
    
};
module.exports = even_asc_odd_desc;
