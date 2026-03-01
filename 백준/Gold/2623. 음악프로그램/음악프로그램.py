import sys
from collections import defaultdict, deque

def topology_sort(graph, in_degrees, N):
    result = []
    q = deque()
    for i in range(1, N+1):
        if in_degrees[i] == 0:
            q.append(i)

    for i in range(1, N+1):
        if not q:
            return 0
        pop_node = q.popleft()
        result.append(pop_node)
        for children in graph[pop_node]:
            in_degrees[children] -= 1
            if in_degrees[children] == 0:
                q.append(children)


    return result

input_arr = lambda : sys.stdin.readline().strip().split()
graph = defaultdict(list)

N, M = list(map(int, input_arr()))
in_degrees = [0] * (N+1)

for _ in range(M):
    arr = list(map(int, input_arr()))
    for i in range(1, len(arr)-1):
        graph[arr[i]].append(arr[i+1])
        in_degrees[arr[i+1]] += 1

res = topology_sort(graph, in_degrees, N)

if not res:
    print(res)
else:
    for num in res:
        print(num)