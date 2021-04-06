var readlineSync = require('readline-sync');

var age = readlineSync.question('What is your age? ');

console.log(typeof(parseInt(age)));