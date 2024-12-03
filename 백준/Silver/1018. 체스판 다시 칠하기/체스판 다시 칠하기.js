const fs = require('fs');
const board = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [row, column] = board.shift().split(' ').map(Number);
const whiteStart = 'WBWBWBWB';
const blackStart = 'BWBWBWBW';
const white = Array.from({ length: 8 }, (_, index) => {
  if (index % 2 === 0) return whiteStart;
  return blackStart;
});
const black = Array.from({ length: 8 }, (_, index) => {
  if (index % 2 === 0) return blackStart;
  return whiteStart;
});

function getDiff(sliceBoard, startIndex) {
  //start문자를 가리지 않고, 화이트의 경우와 블랙의 경우를 몽땅 고려해야됨
  let [wCnt, bCnt] = [0, 0];
  for (let i = 0; i < 8; i++) {
    const sliceRow = sliceBoard[i].slice(startIndex, startIndex + 8);
    for (let j = 0; j < 8; j++) {
      if (sliceRow[j] !== white[i][j]) wCnt++;
      else if (sliceRow[j] !== black[i][j]) bCnt++;
    }
  }
  if (wCnt > bCnt) return bCnt;
  return wCnt;
}

/**
 * 1. 좌표를 이동하면서 8x8보드를 잘라낸다.
 * 2. 8x8보드와 체스판(화이트 혹은 블랙 시작)과 비교했을 때 차이가 가장 적은 보드를 고른다.
 * 3. 차이가 있는 개수가 정답이다.
 *
 * [알아야 할 정보]
 * 0. 보드를 잘라내는 로직
 * 1. 형식에 맞는 체스판
 * 2. 차이값을 알 수 있는 로직
 */
let answer = 64;

for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= column - 8; j++) {
    const sliceBoard = board.slice(i, i + 8);
    const diff = getDiff(sliceBoard, j);
    if (answer > diff) answer = diff;
  }
}

console.log(answer);
