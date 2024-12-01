const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const paperCnt = Number(input.shift());
let answer = 0;
const positions = input.map((value) => {
  return value.split(' ').map(Number);
});
const plane = Array(101);
for (let i = 0; i < plane.length; i++) {
  plane[i] = Array(101).fill(0);
}

positions.forEach(([x, y]) => {
  for (let row = y; row < y + 10; row++) {
    for (let col = x; col < x + 10; col++) {
      plane[row][col] = 1;
    }
  }
});

plane.forEach((_, row) => {
  plane.forEach((_, col) => {
    if (plane[row][col] === 1) answer++;
  });
});

console.log(answer);
//도화지 넓이 : 100 x 100 = 10,000
//색종이 넓이 : 10x10 = 100
//paperCnt : 색종이 개수
/**position : (x,y) 좌하단 꼭지점 위치 ex . 3,7 일 경우
 * (3,7) (3,17) (13,17) (13,7) 로 좌표가 결정됨 (길이가 10이기 때문)
 *
 */

/**
 * 기본적으로 넓이는 100이지만, 겹치는 경우 겹친 만큼 넓이를 빼줘야됨
 * 해당되는 좌표를 전부 1로 채우고, 1의 개수가 정답이 됨
 */
