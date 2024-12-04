const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const array = Array.from({ length: input }, (_, i) => i + 1);
let front = 0;

while (input > 1) {
  front++;
  input--; 
  array.push(array[front]);
  front++;
}
console.log(array[front]);