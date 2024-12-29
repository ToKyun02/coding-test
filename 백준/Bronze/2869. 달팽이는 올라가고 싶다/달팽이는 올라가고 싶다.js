const [up, down, target] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const diff = up - down;

/**
 * 점화 식에 근거하여
 * 목표 달성 일이 n일 때, n-1일 저녁 기준으로 높이가
 * target-up<= x <= target-1 이어야 됨
 *
 * target-up이상이 되는 날에다가 +1 하는게 정답
 * 목표 달성 바로 전날은 target-up/diff을 올림하는 것과 같음
 *
 */

const yesterday = { height: target - up };

yesterday.date = Math.ceil(yesterday.height / diff);

console.log(yesterday.date + 1);