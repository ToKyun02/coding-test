function getMaxFrequency(array){
    const freqObj = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    const freqArr = Object.values(freqObj);
    const maxFreq = Math.max(...freqArr);
    
    const maxFreqNums = Object.entries(freqObj)
        .filter(([num, freq]) => freq === maxFreq)
        .map(([num]) => Number(num));
    
    return maxFreqNums.length === 1 ? maxFreqNums[0] : -1;
}

function solution(array) {
    return getMaxFrequency(array);
}