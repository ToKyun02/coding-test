import sys
from collections import defaultdict

input = lambda : sys.stdin.readline().strip()

N, M = map(int, input().split())
graph = defaultdict(list)
matched = [0] * (M+1)

for n in range(N):
    a = n+1
    line = list(map(int, input().split()))
    for i in range(1, len(line)):
        b = line[i]
        graph[a].append(b)

def dfs(a, graph, visited, matched):
    for b in graph[a]:
        if b in visited:
            continue
        visited.add(b)
        if matched[b] == 0 or dfs(matched[b], graph, visited, matched):
            matched[b] = a
            return True
    return False

matching_cnt = 0
for a in graph:
    visited = set()
    if dfs(a, graph, visited, matched):
        matching_cnt+=1
print(matching_cnt)