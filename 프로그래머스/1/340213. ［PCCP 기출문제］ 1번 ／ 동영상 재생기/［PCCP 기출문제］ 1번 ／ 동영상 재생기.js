function solution(video_len, pos, op_start, op_end, commands) {
 
    //시간단위 통일(sec)
    const videoSec = Number(video_len.split(':')[0])*60 + Number(video_len.split(':')[1]);
    const posSec = Number(pos.split(':')[0])*60 + Number(pos.split(':')[1]);
    const opStartSec = Number(op_start.split(':')[0])*60 + Number(op_start.split(':')[1]);
    const opEndSec = Number(op_end.split(':')[0])*60 + Number(op_end.split(':')[1]);
    let answer= posSec;
    
    if(posSec>=opStartSec && posSec<opEndSec) answer = opEndSec;
    
    //입력한 명령어 순차적으로 처리 (prev 혹은 next)
    commands.forEach((command)=>{
        let time = answer;    
        //next
        if(command==='next') time+=10;
        //prev
        else time-=10;
        //재생 시간 벗어나면
        if(time>videoSec) time=videoSec;
        if(time<0) time=0;  
        //오프닝 구간이면
        if(time>=opStartSec&& time<opEndSec) time = opEndSec;
        answer=time;
    });
    const [min,sec] = [Math.floor(answer/60),answer%60];
    if(min<10) answer=`0${min}:`;
    else answer = `${min}:`;
    if(sec<10) answer+=`0${sec}`;
    else answer+=sec;
    
    return answer; //mm:ss 형식
}