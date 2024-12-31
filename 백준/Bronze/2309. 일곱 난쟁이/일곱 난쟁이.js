const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 9명의 키 합에서 2명의 키를 뺀 것을 추출하면 됨
// 이전 i값은 전부 비교한 것이기에 j가 i보다 1커야됨

const total = input.reduce((acc, cur) => acc + cur, 0);

const solution = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (total - input[i] - input[j] === 100) {
        return input
          .filter((_, index) => index !== i && index !== j)
          .sort((a, b) => a - b)
          .join('\n');
      }
    }
  }
};

const result = solution();

console.log(result);
