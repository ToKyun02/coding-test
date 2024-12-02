const fs = require('fs');
const number = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [k, n] = number.shift().split(' ').map(Number);
const lanLengthes = number.map(Number);

//k개의 랜선을 이용하여 n개의 랜선은 무조건 만들 수 있다고 가정
//자를 땐 항상 cm단위로 정수 길이만큼 자른다고 가정
//n개보다 더많은 랜선을 만든 것도 n개를 만들었다고 할 수 있다.
//더 잘게 자르면 최대 길이가 아니므로 딱히 고려안해도 되긴 함
//answer = 만들 수 있는 최대 랜선의 길이

//1~max의 길이 중 길이가 증가할 수로 랜선 개수는 감소한다.
/**
 * 1 2 3 ...... 789 790 이 있을 때 mid값을 기준으로 개수가 더 작으면 left를 mid로 주고 다시 mid 구해야 됨
 * 350 .... 790 이 있을 때 mid값을 기준으로 개수가 더크거나 같으면 right값이 mid임
 * 350 ... 570 이 있을 때 mid 값을 기준으로 개수가 더크거나...
 *
 * x회전 결과 400 401 402 일 때 mid값을 기준으로 개수가 더작으면 left값은 mid
 * 401 402 mid값을 기준으로 개수가 더 작으면 left=402, right= 402
 * 402 mid 값을 기준으로 개수가 크거나 같으면 right는 401 left=402
 *
 */
let left = 1;
let right = Math.max(...lanLengthes);

//left가 right보다 커져야 비로서 끝난 것
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 0;
  for (let i = 0; i < k; i++) {
    cnt += Math.floor(lanLengthes[i] / mid);
  }
  if (cnt >= n) left = mid + 1;
  else right = mid - 1;
}

//마지막에 left가 mid + 1로 이동한 상태이기 때문에 
//왜냐 마지막 회전 즈음에 right는 반드시 최대 길이가 되는 곳을 가리킬 수 밖에ㅔ 없기 때문
console.log(right);
