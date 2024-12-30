const input = require('fs')
  .readFileSync('/dev/stdin') 
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sort = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
};

input.shift();
sort(input);
console.log(input.join('\n'));
