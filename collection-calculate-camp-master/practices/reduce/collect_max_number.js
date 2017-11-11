'use strict';

function collect_max_number(collection) {
 return Math.max.apply(this,collection);
}

module.exports = collect_max_number;
