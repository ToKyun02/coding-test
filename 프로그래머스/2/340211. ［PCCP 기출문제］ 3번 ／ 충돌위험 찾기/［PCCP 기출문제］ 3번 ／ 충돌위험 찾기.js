function setMap(map, x, y, cnt){
    const key = `${x} ${y} ${cnt}`;
            
    if(map.has(key)){
        map.set(key,1);
    }
    else{
        map.set(key, 0);
    }
}

function solution(points, routes) {  
    const map = new Map();
    
    routes.forEach((route)=>{
        let cnt=0;
        const [startPoint, ...endPoint] = route;
        let [startY, startX] = points[startPoint-1];      


        for(let i=0; i<endPoint.length; i++){
            const [endY, endX] = points[endPoint[i]-1];
            while(startY!==endY||startX!==endX){
                setMap(map,startX,startY,cnt);

                if(startY>endY) startY--;
                else if(startY<endY) startY++;
                else{
                    if(startX>endX) startX--;
                    else if(startX<endX) startX++;
                }
                cnt++;
            }

        }
        const [endY, endX] = points[endPoint.pop()-1];
        setMap(map, endX, endY, cnt);
    })
    return Array.from(map.values()).filter((value)=>value>0).length;
}