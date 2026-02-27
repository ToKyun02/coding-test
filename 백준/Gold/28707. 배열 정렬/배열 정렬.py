from itertools import permutations
from heapq import heappop, heappush

def solve():

    N = int(input())
    arr = [node for node in map(int, input().split())]
    M = int(input())
    ops = [list(map(int, input().split())) for _ in range(M)]

    start_node = tuple(arr)
    end_node = tuple(sorted(arr))

    distances = {start_node:0}
    pq = [(0, start_node)]
    while pq:
        cur_w, cur_perm = heappop(pq)
        if cur_perm == end_node:
            print(cur_w)
            return

        if cur_w > distances.get(cur_perm, float('inf')):
            continue
        for u, v, w in ops:
            next_perm = list(cur_perm)
            next_perm[u-1], next_perm[v-1] = next_perm[v-1], next_perm[u-1]

            next_node = tuple(next_perm)

            if cur_w + w < distances.get(next_node, float('inf')):
                distances[next_node] = cur_w + w
                heappush(pq, (cur_w+w, next_node))

    print(-1)
solve()