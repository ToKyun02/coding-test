const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
// 1 <= n < 15

/**
 * n이 3이하이면 배치 불가
 * n이 1일 땐 배치 가능 수 1개
 *
 * 배치 원칙
 * 1. 한 행엔 하나의 기물만 가능 = n개가 다른 행이어야 함
 * 2. 한 열엔 하나의 기물만 가능 = n개가 다른 열이어야 함
 * 3. 대각선 배치 불가 = i, j가 대각선이 되면 안됨
 *
 * 첫째 행 기준으로 행을 높히고, 열을 탐색하면서 불가능한지 판단해야 됨
 */
let result = 0;

function isMount(board, row, col) {
  for (let i = 0; i < row; i++) {
    // 같은 열이거나 대각선에 있으면 배치 불가
    // i값은 행, board[i]값은 열 이다.
    // 열차이와 행차이가 같으면 대각선인 것이므로, 배치불가임임
    if (board[i] === col || Math.abs(board[i] - col) === row - i) return false;
  }
  // 그 외엔 배치 가능
  return true;
}

function backtrack(board, row, n) {
  //퀸 배치 완료 시
  if (row === n) {
    result++;
    return;
  }
  for (let col = 0; col < n; col++) {
    // 퀸 배치가 가능한지 검사
    if (isMount(board, row, col)) {
      board[row] = col; //행에 대해 퀸 배치
      backtrack(board, row + 1, n); //현재 퀸 배치에 따른 다음 행 재귀 호출
      board[row] = -1; //한 열 종료 후 퀸 없애고, 다음 열로 이동
    }
  }
}

function solution(n) {
  const board = Array(n).fill(-1); //-1은 퀸이 없는 상태, 행에 대한 배열임임
  if (n >= 4) backtrack(board, 0, n);
}

if (n === 1) result = 1;
solution(n);

console.log(result);
