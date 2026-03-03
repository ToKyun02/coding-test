from collections import defaultdict
from heapq import heappop, heappush


N, M = map(int, input().split())
in_degrees = [0] * (N+1)
graph = defaultdict(list)

for _ in range(M):
    u, v = map(int, input().split())
    in_degrees[v] += 1
    graph[u].append(v)

pq = []

for i in range(1, N+1):
    if in_degrees[i] == 0:
        heappush(pq, (0, i, 0))

res = []
for _ in range(N):
    if not pq:
        print('error')
        exit(-1)

    _, pop_v, importances = heappop(pq)
    res.append(pop_v)

    for neighbor in graph[pop_v]:
        in_degrees[neighbor] -= 1
        if in_degrees[neighbor] == 0:
            heappush(pq, (0, neighbor, importances+1 ))

print(' '.join(map(str, res)))
