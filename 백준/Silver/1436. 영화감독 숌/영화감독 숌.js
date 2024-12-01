const fs = require('fs');
const number = Number(fs.readFileSync('/dev/stdin').toString().trim());
let cnt = 0;
let answer = 666;

while (true) {
  if ((answer + '').includes('666')) cnt++;
  if (number === cnt) break;
  answer++;
}

console.log(answer);