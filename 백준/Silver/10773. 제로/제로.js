let input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map(Number);


function solution(){
  let stack =[];
  let result=0;
  let length = input[0];
  for(i=1; i<=length; i++){
    if(input[i]===0){
        stack.pop();
    }
    else{
        stack.push(input[i]);
    }
  }
  for (let i = 0; i < stack.length; i += 1) {
  result += stack[i];
}
  console.log(result);
}

solution();