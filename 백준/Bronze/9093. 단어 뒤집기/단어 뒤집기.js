const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();

let str = '';
input.forEach((value, i) => {
  value.split(' ').forEach((char, k) => {
    for (let j = char.length - 1; j >= 0; j--) {
      str += char[j];
    }
    if (k !== value.length - 1) str += ' ';
  });
  if (i !== input.length - 1) str += '\n';
});

console.log(str);
