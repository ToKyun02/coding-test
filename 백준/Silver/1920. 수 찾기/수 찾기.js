const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const set = new Set(input[1].split(' ').map(Number));
const array2 = input[3].split(' ').map(Number);
let answer = '';

array2.forEach((value) => {
  answer += set.has(value) ? 1 : 0;
  answer += ' ';
});

console.log(answer.trim().split(' ').map(Number).join('\n'));
