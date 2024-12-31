const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const LENGTH = Number(input.shift());

let result = 0;

const getMaxNum = (arr) => {
  let sum = 0;
  for (let i = 1; i < LENGTH; i++) {
    sum += Math.abs(arr[i] - arr[i - 1]);
  }
  return Math.max(result, sum);
};

const backTrack = (arr, left, right) => {
  // 모든 원소가 고정 되면 최대값 갱신
  /**
   * [1,2,3,4]일 때
   *
   * 1 2 3 4, 1 2 4 3, 1 3 2 4 ... 등 순열 완성 시 계산
   *
   */
  if (left === right) {
    result = getMaxNum(arr);
    return;
  }

  for (let i = left; i <= right; i++) {
    //요소 하나 첫번째로 고정 후, 순열 만들기
    [arr[left], arr[i]] = [arr[i], arr[left]];
    //이후 나머지 요소를 n+1번째로 고정 후, 재귀적으로 순열 만들기
    backTrack(arr, left + 1, right);
    //다음 요소를 첫번째로 고정하기 전, 스왑 초기화화
    [arr[left], arr[i]] = [arr[i], arr[left]];
  }
};

const solution = () => {
  const arr = input[0].split(' ').map(Number);
  backTrack(arr, 0, LENGTH - 1);
  console.log(result);
};

solution();
