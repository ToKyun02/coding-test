function solution(ingredient) {
    const BREAD = 1;
    const VEGETABLE = 2;
    const MEAT = 3;
    const hamburger = `${BREAD}${VEGETABLE}${MEAT}${BREAD}`;
    
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4 && stack.slice(-4).join('') === hamburger) {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer++;
        }
    }
    
    return answer;
}