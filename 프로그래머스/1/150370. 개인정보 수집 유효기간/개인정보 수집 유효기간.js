function isExpire(dateNum, todayNum){
    if(dateNum<todayNum) return true;
    return false;
}

function setExpire(termTable, date, type){
    let [year, month, day] = date.split('.').map(Number);
    
    month += termTable[type];
    // 더했을 때 12월을 초과하면 다음 년도 증가
    while(month>12){
        year++;
        month-=12;
    }
    // day가 1일이면 전월
    if(day === 1){
        //월이 1월이면 연도 -1, 월 = 12
        if(month===1){
            year--;
            month=12;
        }
        //그 외의 경우는 월 감소
        else month--;  
        day=28;
    }
    // 그 외의 경우 day--;
    else day--;
    if(month<10){
        if(day<10) return `${year}.0${month}.0${day}`;
        else return `${year}.0${month}.${day}`;
    }
    else {
        if(day<10) return `${year}.${month}.0${day}`;
        else return `${year}.${month}.${day}`;
    }
}

function solution(today, terms, privacies) {
    const answer = [];
    const expirations = [];
    const termTable = {};
    const todayNum = Number(today.split('.').join(''));
    terms.forEach((term)=>{
       const [key, value] = term.split(' ');
        termTable[key] = Number(value);
    });
    // 유효기간 = 동의 시간 + 약관 기간 - 1일 => 만약 -1일 때 0이면 전월 28일 
    // 1. privacy별 만료기간
    // 2. today기준으로 만료 여부 체크
    
    // 만료기간 설정
    privacies.forEach((privacy)=>{
        const [date, type] = privacy.split(' ');
        expirations.push(setExpire(termTable,date,type));
    });
    
    // 만료 여부 검사
    expirations.forEach((expiration,index)=>{
        const dateNum = Number(expiration.split('.').join(''));
        
        if(isExpire(dateNum, todayNum)) answer.push(index+1);
    });
    return answer.sort((a,b)=>a-b);
}