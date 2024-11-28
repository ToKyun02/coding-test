function isPossible(diffs,times,limit,mid){
    let solvedTime = 0;

    for(let i=0; i<diffs.length; i++){
        solvedTime += i ? resolvePuzzle(diffs[i]-mid,times[i], times[i-1]) : times[i];
        if(solvedTime>limit) return false;
    }
    
    return true;
}

function resolvePuzzle(diffLevel,curTime,preTime){//diffLevel = diff - level
    if(diffLevel<=0) return curTime;
    return (curTime+preTime)*diffLevel+curTime;
}


function solution(diffs, times, limit) {
 
    let left = 1;
    let right = 1;
    let answer = right;
    diffs.forEach((value)=>{
        if(value>right) right=value;
    });
    answer= right;
    
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(isPossible(diffs,times,limit,mid)){
            answer = mid;
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    
    
    return answer;
}