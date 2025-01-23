function getSecondBigDevisor(n){
    const length = Math.floor(Math.sqrt(n));
    const arr=[];
    
    for(let i=2; i<=length; i++){
        const devisor = Math.floor(n/i);
        if(n%i===0){
            arr.push(i);
            if(devisor<=1e7) return devisor;
        }
    }
    
    if(arr.length>0) return arr[arr.length-1];
    
    return 1;
}

function solution(begin, end) {
    
    //해당 자리에 배치할 자리의 숫자가 소수이면 첫번째 요소는 무조건 1이고, 1이면 무조건 0임
    //1도 아니고 소수가 아니면, 자신과 다른 약수 중 가장 큰 약수가 숫자번호가 됨
    const answer = [];
    
    while(begin<=end){
        if(begin===1){
            answer.push(0);
        }else{
            answer.push(getSecondBigDevisor(begin));
        }
        
        begin++;
    }
    
    return answer;
}