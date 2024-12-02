const fs = require('fs');
const number = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = number.shift();

/**
 * push 규칙 : push를 할때마다 숫자가 1씩 커짐
 * 때문에 [1,2,3] 일 때 pop을 하면 [1,2]가되는데 이때 push를 하면
 * [1,2,3]이 아니라 1씩 커져야해서 [1,2,4]가 들어감
 *
 * 위 규칙에 따라 push, pop으로 수열을 number[1]~number[n-1] 만들 수 없을 때 NO
 * 그 외에는 push했을 때 +, pop했을 때 - 횟수를 한 줄씩 출력한다.
 */

let pushNum = 1;
let answer = [];
const stack = [];

/**
 * 스택에 수열값 있으면 해당 값까지 스택 pop
 * 스택에 수열값이 없으면 pushNum을 증가시키면서 수열값까지 스택에 넣고 pop
 * 만약 수열값이 없는 상황에서 pushNum이 수열값보다 클 경우 연산 불가 답은 그 즉시 NO
 */

//수열의 길이 만큼 반복
for (let i = 0; i < n; i++) {
  const value = number[i];
  while (pushNum <= value) {
    stack.push(pushNum);
    pushNum++;
    answer.push('+');
  }
  let popNum = stack.pop();
  answer.push('-');

  if (popNum !== value) {
    answer = ['NO'];
    break;
  }
}

console.log(answer.join('\n'));
