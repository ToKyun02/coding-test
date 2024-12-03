const fs = require('fs');
const n = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const compare = (a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
};

n.shift();

console.log(n.sort(compare).join('\n'));