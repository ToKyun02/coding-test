import sys
from collections import defaultdict

input = sys.stdin.readline
sys.setrecursionlimit(200_000)


def dfs(start, graph, SCC, path, finished, stack, id_counter):
    id_counter[0] += 1
    path[start] = id_counter[0]
    stack.append(start)
    parent = path[start]

    for node in graph[start]:
        if path[node] == 0:
            parent = min(parent, dfs(node, graph, SCC, path, finished, stack, id_counter))
        elif not finished[node]:
            parent = min(parent, path[node])

    if parent == path[start]:
        scc = []
        while stack:
            top = stack.pop()
            scc.append(top)
            finished[top] = True
            if top == start:
                break
        SCC.append(scc)
    return parent


def solve():
    N = int(input())
    graph = defaultdict(list)
    arr = list(map(int, input().split()))
    finished = [False] * (N + 1)
    path = [0] * (N + 1)
    stack = []
    SCC = []
    id_counter = [0]

    for i in range(N):
        u = i + 1
        v = arr[i]
        graph[u].append(v)

    for node in range(1, N + 1):
        if path[node] == 0:
            dfs(node, graph, SCC, path, finished, stack, id_counter)

    res = N
    for scc in SCC:
        if len(scc) > 1 or (len(scc) == 1 and scc[0] in graph[scc[0]]):
            res -= len(scc)

    print(res)


for tc in range(int(input())):
    solve()