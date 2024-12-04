const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = Number(input.shift());

/**
 * 문자열의 시작이 )이면 NO
 * 문자열의 끝이 (이면 NO
 * 각 괄호의 개수가 다르면 NO
 * 총 괄호의 개수가 홀수면 NO
 *
 * 맨 처음과 맨 마지막 문자열이 ()이어야 하고,
 * 그걸 제외한 나머지 괄호 요소 중 또 처음과 마지막이 ()이어야 한다.
 * 괄호을 열면 +1이고, 괄호를 닫으면 -1이다.
 *
 * cnt합을 구하는 데, 처음이라도 음수가 되면 괄호가 완성되지 않기에 NO
 * cnt합을 다 구했는데, 양수가 되면 여는 괄호가 더 많아지기에 NO
 * 결국 모든 cnt합이 0이 되어야 하고, cnt를 구하는데 음수가 한 번이라도 발생하지 않아야함
 *
 */
let answer = '';
input.forEach((line) => {
  let cnt = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '(') cnt++;
    else cnt--;
    if (cnt < 0) break;
  }
  if (cnt === 0) answer += 'YES ';
  else answer += 'NO ';
});
console.log(answer);