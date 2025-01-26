function solution(bridge_length, weight, truck_weights) {
    let answer=0;
    
    const bridge = Array.from( {length:bridge_length}, ()=>0);
    let totalWeight=0;
    let cnt=0;
    
    while(1){
        if(cnt===0 && truck_weights.length===0) break;
        
        let passValue = bridge.shift();
        if(passValue!==0){
            totalWeight-=passValue;
            cnt--;
        }
        
        if(totalWeight+truck_weights[0]<=weight && cnt<bridge_length){
             
             totalWeight+=truck_weights[0];
             cnt++;
             bridge.push(truck_weights.shift());
         }
        else{
            bridge.push(0);
        }

        answer++
    }
    return answer;
}