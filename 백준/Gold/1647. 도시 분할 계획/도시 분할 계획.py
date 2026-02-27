import sys

sys.setrecursionlimit(200_000)

class Edge:
    def __init__(self, n1, n2, w):
        self.n1 = n1
        self.n2 = n2
        self.w = w

    def __lt__(self, other):
        return self.w < other.w

    def __iter__(self):
        yield self.n1
        yield self.n2
        yield self.w

def union(parents, a, b):
    ap = find(parents, a)
    bp = find(parents, b)
    if ap > bp:
        parents[ap] = bp
    else:
        parents[bp] = ap

def find(parents, x):
    if parents[x] == x:
        return x
    parents[x] = find(parents, parents[x])
    return parents[x]

input = lambda : sys.stdin.readline().strip()

N, M = map(int, input().split())

parents = {p : p for p in range(1,N+1)}
edges = []
for _ in range(M):
    u, v, w = map(int, input().split())
    edges.append(Edge(u, v, w))
edges.sort()

res = 0
max_w=0
for edge in edges:
    n1, n2, w = edge
    if find(parents, n1) == find(parents, n2):
        continue
    union(parents, n1, n2)
    max_w = max(max_w, w)
    res+=w
print(res - max_w)