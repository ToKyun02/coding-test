import sys
from collections import deque, defaultdict

input = sys.stdin.readline

def topology_sort(in_degrees, graph, N):
    res = []
    q = deque()

    for i in range(1, N+1):
        if in_degrees[i] == 0:
            q.append(i)

    for i in range(1, N+1):
        if not q :
            break
        pop_v = q.popleft()
        res.append(pop_v)

        for node in graph[pop_v]:
            in_degrees[node] -= 1
            if in_degrees[node] == 0:
                q.append(node)

    return res


def solve():
    N, M = map(int, input().split())

    in_degrees = [0] * (N+1)
    graph = defaultdict(list)
    for _ in range(M):
        u, v = map(int, input().split())
        in_degrees[v] += 1
        graph[u].append(v)

    res = topology_sort(in_degrees, graph, N)
    print(' '.join(map(str, res)))

solve()