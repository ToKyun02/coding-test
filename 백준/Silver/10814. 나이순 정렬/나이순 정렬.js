const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.trim());

input.shift();

input.sort((a, b) => {
  const aAge = Number(a.split(' ')[0]);
  const bAge = Number(b.split(' ')[0]);

  if (aAge > bAge) return 1;
  else if (aAge < bAge) return -1;
  return 0;
});
process.stdout.write(input.join('\n') + '\n');
