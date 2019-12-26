var counter1 =  require('./utils/counter');
var counter2 =  require('./utils/counter');

console.log(counter1.count()); // 1
console.log(counter2.count()); // 2
console.log(counter2.count()); // 3