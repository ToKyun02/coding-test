function solution(n, w, num) {
    const obj = {};
    let key = 1;
    
    for(let i=1; i<=n; i++){
        if(obj[key]===undefined) obj[key] = [i];
        else obj[key].push(i);         
        
        // 짝수 층은 반전시키기
        if(i%w===0){
            if(key%2===0){
                obj[key] = obj[key].reverse();
            }
            key++;
        }
        
        // 제일 위층에서 남은 칸 은 0으로 채우기
        if(n===i){
            if(!obj[key]) continue;
            if(obj[key].length<w){
              const restLength = w-obj[key].length;
                for(let j=0; j<restLength; j++){
                   obj[key].push(0);
                }
            }
            if(key%2===0) obj[key] = obj[key].reverse();
        }    
        
    }
    
    let searchFloor = Math.floor((num-1)/w) + 1;
    const searchIndex = obj[searchFloor].indexOf(num);
    let answer = 0;
    while(obj[searchFloor]?.[searchIndex]){
        answer++;
        searchFloor++;
    }
    
    return answer;

}