const fs = require('fs');
const words = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
words.shift();
//중복 단어 제거

const set = new Set(words);
const newWords = [];

for (const e of set.values()) {
  newWords.push(e);
}

//정렬하기
newWords.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length === b.length) {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
  } else return -1;
});

console.log(newWords.join('\n'));
