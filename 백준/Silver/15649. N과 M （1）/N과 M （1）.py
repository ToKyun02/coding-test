def find_sequence(N,M,visited, depth, tmp):
    string = ''
    if depth == M :
        return ' '.join(tmp) + '\n'
       
    
    for i in range(1, N+1):
        if visited[i-1] == False : 
            visited[i-1] = True
            tmp.append(f"{i}")
            string += find_sequence(N,M,visited, depth+1, tmp)
            visited[i-1] = False
            tmp.pop()
    
    return string
            
        

def solve():
    [N,M] = [int(i) for i in input().split(' ')]
    visited = [False for _ in range(N)]
    answer = find_sequence(N,M,visited, 0, [])
    print(answer)


solve()