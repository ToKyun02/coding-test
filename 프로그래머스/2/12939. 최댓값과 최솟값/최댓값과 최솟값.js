function solution(s) {
    var answer = '';
    const number = s.split(' ').map(Number);
    answer = `${Math.min(...number)} ${Math.max(...number)}`
    return answer;
}