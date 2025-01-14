function solution(players, callings) {
    const answer = [];
    const playerTable = {};
    players.forEach((player,i)=>{
        playerTable[player] = i;
    });
    // calling이 되면 자신과 자신의 앞 플레이어 위치 스왑
    callings.forEach((calling)=>{
        const position = playerTable[calling];
        const swapName = players[position-1];
        [players[position-1], players[position]] = [players[position],players[position-1]];
        playerTable[calling]--;
        playerTable[swapName]++;
    });
    return players;
}