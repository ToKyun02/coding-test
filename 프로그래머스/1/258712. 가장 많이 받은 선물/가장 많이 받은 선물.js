function solution(friends, gifts) {
    var answer = 0;
    //선물 주고 받은 차트
    const giftChart={};
    const scoreChart={};
    const nextGiftCnt = {};
    //초기화
    friends.forEach((value)=>{
        let tmp = {};
        giftChart[value] = {};
        scoreChart[value] = [0,0,0];
        nextGiftCnt[value]=0;
        friends.forEach((name)=>{
            giftChart[value][name]=0;
        })
    });
    //gifts 파싱하여 차트 채우기
    gifts.forEach((value,index)=>{
        const [send, receive] = value.split(' ');
        //giftChart 채우기
        giftChart[send][receive]++;
        //scoreChart 채우기(선물지수 제외)
        scoreChart[send][0]++;
        scoreChart[receive][1]++;
    });
    //선물 지수 채우기
    for(const e in scoreChart){
        scoreChart[e][2] = scoreChart[e][0] - scoreChart[e][1];
    } 
    //giftChart순회하여 받은 선물 증가시키기(sender 시점으로 비교)
    for(const sendName in giftChart){
        const send = giftChart[sendName];
        for(const receiveName in send){
            //send와 receive이름 같으면 로직 계산 x
            if(sendName===receiveName) continue;
            const senderCnt=giftChart[sendName][receiveName];
            const receiverCnt =giftChart[receiveName][sendName];
            //기록이 하나도 없거나 주고받은 수가 같다면
            if(senderCnt===receiverCnt){
                //sender의 선물지수가 더 크면 받은 선물 증가
                if(scoreChart[sendName][2]>scoreChart[receiveName][2]) nextGiftCnt[sendName]++;
            }
            //기록 존재하고, 주고받은 수가 다르면
            else{
                //sender가 더많이 줬으면 증가
                if(senderCnt>receiverCnt)  nextGiftCnt[sendName]++;    
            }
        }
    }
    answer = Math.max(...Object.values(nextGiftCnt));
    return answer;
}