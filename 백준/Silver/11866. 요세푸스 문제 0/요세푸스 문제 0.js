const fs = require('fs');
const [n, k] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

//첫번째 사람과 마지막 사람은 연산과 관계없이 고정됨
//첫번째 사람 arr[k-1], 마지막 사람은 배열의 길이가 1일 때 사람

const people = Array.from({ length: n }, (_, index) => index + 1);
const result = [];
let index = 0;

while (people.length > 0) {
  index = (index + k - 1) % people.length;
  result.push(people[index]);
  people.splice(index, 1);
}

if (people[0] !== undefined) result.push(people.pop());

console.log(`<${result.join(', ')}>`);
