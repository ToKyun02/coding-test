const input = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

const memo = Array.from({ length: input + 1 }, () => 0);
memo[0] = 1;
memo[1] = 1;

const getFact = (num) => {
  // memo에 값이 있으면 memo 값 return
  if (memo[num]) return memo[num];

  // memo에 값이 없으면 memo에 저장값 저장하고 return
  memo[num] = num * getFact(num - 1);
  return memo[num];
};

console.log(getFact(input));
