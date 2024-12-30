const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
// 1 <= n <= 100

/**
 * n이 20보다 크면 과정 출력 생략
 * n이 20보다 작거나 같으면 과정 출력
 */

/**
 * n = 1일 때 1 = 2^1 - 1
 * n = 2일 때 a(n-1) + 2 = 3 = 2^2-1
 * n = 3일 때 a(n-1) + 4 = 7 = 2^3-1
 * n = 4일 때 a(n-1) + 7 = 15 = 2^4-1
 * 수열의 점화식으로 표현하면 2a(n-1) + 1이 옮긴횟수가 된다.
 *
 * n-1개의 원판을 보조 기둥으로 옮겨야 하고, 그 다음 제일 큰 원판을 목표 기둥으로 옮긴다.
 * 마지막으로 n-1개의 원판을 보조기둥에서 목표기둥으로 옮기면 완성된다.
 *
 */
const moveCnt = BigInt(2) ** BigInt(n) - BigInt(1);
let result = '';
result += moveCnt.toString();

//n개의 원반을 from기둥에서 to기둥으로 옮기기
const hanoi = (n, from, to, other) => {
  if (n === 1) {
    result += '\n' + `${from} ${to}`;
  } else {
    // n-1개의 원반을 from기둥에서 other(보조)기둥으로 옮기기
    hanoi(n - 1, from, other, to);
    result += '\n' + `${from} ${to}`;
    // n-1개의 원반을 other(보조) 기둥에서 to(목표)기둥으로 옮기기
    hanoi(n - 1, other, to, from);
  }
};

if (n <= 20) hanoi(n, 1, 3, 2);

console.log(result);
