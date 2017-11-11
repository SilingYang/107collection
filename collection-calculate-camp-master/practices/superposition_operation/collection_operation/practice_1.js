'use strict';

function hybrid_operation(collection) {

  collection=collection.map(function(item,index,array){
    return item*3+2});
  return eval(collection.join("+"));
}

module.exports = hybrid_operation;

