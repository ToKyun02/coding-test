import sys
from collections import defaultdict

input = lambda : sys.stdin.readline()


class Edge:
    def __init__(self, n1, n2,  w):
        self.n1 = n1
        self.n2 = n2
        self.w = w

    def __lt__(self, other):
        return self.w < other.w

    def __iter__(self):
        yield self.n1
        yield self.n2
        yield self.w


def union_parent(parents, a, b):
    ap = get_parent(parents, a)
    bp = get_parent(parents, b)
    if ap > bp:
        parents[ap] = bp
    else:
        parents[bp] = ap


def get_parent(parents, x):
    if parents[x] == x:
        return x
    parents[x] = get_parent(parents, parents[x])
    return parents[x]


def equal_parent(parents, a, b):
    ap = get_parent(parents, a)
    bp = get_parent(parents, b)
    return ap == bp


pos_dict = defaultdict(list)

N = int(input())
for n in range(N):
    x, y, z = map(int, input().split())
    pos_dict['x'].append((x, n))
    pos_dict['y'].append((y, n))
    pos_dict['z'].append((z, n))

parents = {node : node for node in range(N)}
edges = []
# generate to edge
for pos_key in pos_dict:
    pos_dict[pos_key].sort()
    for i in range(N-1):
        p1, n1 = pos_dict[pos_key][i]
        p2, n2 = pos_dict[pos_key][i+1]
        edge = Edge(n1, n2, abs(p1-p2))
        edges.append(edge)

# search to MST
total_cost = 0
edges.sort()
for edge in edges:
    n1, n2, w = edge
    if equal_parent(parents, n1, n2):
        continue
    union_parent(parents, n1, n2)
    total_cost += w

print(total_cost)
