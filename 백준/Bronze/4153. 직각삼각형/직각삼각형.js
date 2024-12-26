const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.split(' ').map((n) => Number(n)))

const result = []

input.forEach((value) => {
  if (value[0] === 0 && value[1] === 0 && value[2] === 0) {
    return
  }
  const [n1, n2, n3] = value
  const max = Math.max(n1, n2, n3)
  const sumSquare = n1 ** 2 + n2 ** 2 + n3 ** 2 - max ** 2
  if (max ** 2 === sumSquare) result.push('right')
  else result.push('wrong')
})

console.log(result.join('\n'))
