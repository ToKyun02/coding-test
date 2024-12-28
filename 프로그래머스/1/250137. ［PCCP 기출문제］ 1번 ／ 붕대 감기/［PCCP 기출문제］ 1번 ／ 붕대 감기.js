function solution(bandage, health, attacks) {
  let answer = health;
  let cnt = bandage[0];
  const lastAttackTime = attacks[attacks.length - 1][0];
  for (let i = 1; i <= lastAttackTime; i++) {
    // 공격 당할 시
    if (i === attacks[0][0]) {
      answer -= attacks[0][1];
      attacks.shift();
      cnt = bandage[0];
    }
    // 회복해야 할 때때
    else {
      // 공격 안당하고, 최대체력보다 낮으면 회복
      if (answer < health) {
        cnt--;
        answer += bandage[1];
        //연속 회복 성공 시
        if (cnt === 0) {
          cnt = bandage[0];
          answer += bandage[2];
        }
        // 최대 체력 초과하여 회복 시
        if (answer > health) answer = health;
        if (answer <= 0) return -1;
      }
    }
  }
  if (answer <= 0) return -1;
  return answer;
}