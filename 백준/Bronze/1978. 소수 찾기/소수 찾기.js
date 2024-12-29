const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();

const primeList = input[0].split(' ').map(Number);

const isPrime = (num) => {
  if (num === 1) return false;
  // 2 ~ 루트 num 까지의 수만 비교햐여 판단
  const length = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= length; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

let result = 0;

primeList.forEach((num) => {
  if (isPrime(num)) result++;
});

console.log(result);
