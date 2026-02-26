from collections import defaultdict

class Edge:
    def __init__(self,node1, node2, cost):
        self.node1 = node1
        self.node2 = node2
        self.cost = cost

    def __lt__(self, other):
        return self.cost < other.cost

    def __iter__(self):
        yield self.node1
        yield self.node2
        yield self.cost


def union_parent(parents, a, b):
    a_p = get_parent(parents, a)
    b_p = get_parent(parents, b)
    if a_p > b_p :
        parents[b_p] = a_p
    else:
        parents[a_p] = b_p


def get_parent(parents, x):
    if parents[x] == x:
        return x
    parents[x] = get_parent(parents, parents[x])
    return parents[x]


def equal_parent(parents, a, b):
    a_p = get_parent(parents, a)
    b_p = get_parent(parents, b)
    return a_p == b_p

V, E = map(int, input().split())
graph = defaultdict(list)
edges = []
parents = {node : node for node in range(1, V+1)}

for _ in range(E):
    node1, node2, weight = map(int, input().split())
    edges.append(Edge(node1,node2,weight))

edges.sort()

min_cost = 0
for edge in edges:
    n1, n2, w = edge
    if equal_parent(parents, n1, n2):
        continue
    min_cost+=w
    union_parent(parents, n1,n2)

print(min_cost)





