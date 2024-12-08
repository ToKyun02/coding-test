function solution(s) {
  const answer = s
    .split(' ')
    .map((word) =>
      word === '' ? '' : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ')

  return answer
}
