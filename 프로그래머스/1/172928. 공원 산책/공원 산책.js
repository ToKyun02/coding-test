function movePosition(position, direction, moveCnt){
    const [startRow, startCol] = position.split(' ').map(Number);
    switch(direction){
        case 'S' : return `${startRow+Number(moveCnt)} ${startCol}`;
        case 'N' : return `${startRow-Number(moveCnt)} ${startCol}`;
        case 'E' : return `${startRow} ${startCol+Number(moveCnt)}`;
        default : return `${startRow} ${startCol-Number(moveCnt)}`;
    }
}

function isMove(board, position, direction, moveCnt, WIDTH, HEIGHT){
    const [startRow, startCol] = position.split(' ').map(Number);

    if(direction === 'S'){
        // 위쪽 이동 시 HEIGHT보다 크거나 같을 때 false
        if(startRow + Number(moveCnt) >= HEIGHT) return false;
        // 위쪽 이동 할 때 중간에 장애물 발생 시 flase
        for(let i=startRow+1; i<=startRow + Number(moveCnt); i++){
            if(!board[i][startCol]) return false;
        }
    }
    else if(direction === 'N'){
        if(startRow - Number(moveCnt) < 0) return false;
        for(let i=startRow-1; i>=startRow-Number(moveCnt); i--){
            if(!board[i][startCol]) return false;
        }
    }
    else if(direction === 'E'){
        if(startCol + Number(moveCnt) >= WIDTH) return false;
        for(let j=startCol+1; j<=startCol+Number(moveCnt); j++){
            if(!board[startRow][j]) return false;
        }
    }
    else {
        if(startCol - Number(moveCnt) < 0) return false;
        for(let j=startCol-1; j>=startCol-Number(moveCnt); j--){
            if(!board[startRow][j]) return false;
        }
    }
    return true;
}

function solution(park, routes) {
    const HEIGHT = park.length;
    const WIDTH = park[0].length;
    let position = '';
    // init
    const board = Array.from({length : HEIGHT},(_,i)=>{
        return Array.from({length:WIDTH}, (_,j)=>{
            switch(park[i][j]){
                case 'S' : position = `${i} ${j}`; return 1;
                case 'X' : return 0;
                default : return -1;
            }
        });
    });
    // South : 위, North : 아래, East : 오른쪽, West : 왼쪽
    
    routes.forEach((_,i)=>{
        const [direction, moveCnt] = routes[i].split(' ');
        if(isMove(board, position, direction, moveCnt, WIDTH, HEIGHT)){
            position = movePosition(position, direction, moveCnt);
        }
    });
    const answer = position.split(' ').map(Number);
    return answer;
}