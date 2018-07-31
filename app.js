let _ = require('lodash');

let array1 = [2, 5, 5, 1, 3, 1, 4, 2, 2, 4, 6];

console.log(_.sortBy(_.uniq(array1)));