import sys
from collections import defaultdict

sys.setrecursionlimit(100_000)
input_s = lambda: sys.stdin.readline().strip().split()


def dfs(node):
    global _id
    _id += 1
    path[node] = _id
    parent = _id
    stack.append(node)

    for neighbor in graph[node]:
        if not path[neighbor]:
            parent = min(parent, dfs(neighbor))
        elif not finished[neighbor]:
            parent = min(parent, path[neighbor])

    if parent == path[node]:
        scc = []
        while stack:
            pop_node = stack.pop()
            finished[pop_node] = True
            scc.append(pop_node)
            if pop_node == node:
                break
        SCC.append(sorted(scc))
    return parent


V, E = map(int, input_s())
graph = defaultdict(list)
SCC = []
path = [0] * (V+1)
finished = [False] * (V+1)
stack = []
_id = 0

for _ in range(E):
    u, v = map(int, input_s())
    graph[u].append(v)

for node in range(1, V+1):
    if path[node]:
        continue
    dfs(node)

SCC.sort()
print(len(SCC))
for scc in SCC:
    print(' '.join(map(str, scc+[-1])))


