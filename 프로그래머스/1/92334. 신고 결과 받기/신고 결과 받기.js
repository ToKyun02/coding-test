function solution(id_list, report, k) {
    var answer = [];
    //사용자별 신고 당한 횟수 리스트
    const receiveList={};
    //누굴 신고했는지에 대한 리스트
    const sendList={};
    //정지된 사용자 리스트
    const stopList={};
    
    //초기화
    id_list.forEach((id)=>{
        receiveList[id] = {};
        sendList[id]=new Set();
        stopList[id]=false;
    });
    //사용자별 신고 당한 횟수 계산, 사용자별 누굴 신고했는지 파싱
    report.forEach((content)=>{
        const [send,receive] = content.split(' ');
        receiveList[receive][send] = 1; //중복된 사람은 한번만 처리
        sendList[send].add(receive);
    });

    //사용자별 신고 당한 횟수가 k보다 크거나 같을 경우 유무 검사
    for(const id in receiveList){
        let cnt = 0;
        for(const sender in receiveList[id]){
            cnt+=receiveList[id][sender];
        }   
        if(cnt>=k) stopList[id] = true;
    }
    
    //사용자별 신고한 대상의 정지 리스트 추가
    for(const id in sendList){
        const receiverIdArray = [...sendList[id]];
        const stopedIdArray =[];
        for(const receiverId of receiverIdArray){
            //stopList[사용자 아이디]가 true인 경우 정지된 리스트 추가
            if(stopList[receiverId]) stopedIdArray.push(receiverId);
        }
        answer.push(stopedIdArray.length);
    }
    
    
    return answer;
}