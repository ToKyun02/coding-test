import heapq
import sys


def solve():
    input = sys.stdin.readline
    n, k = map(int, input().split())

    jewels = [list(map(int, input().split())) for _ in range(n)]
    bags = [int(input()) for _ in range(k)]

    jewels.sort()
    bags.sort()

    total_value = 0
    candidate_jewels = []
    jewel_idx = 0

    for bag_weight in bags:
        while jewel_idx < n and jewels[jewel_idx][0] <= bag_weight:
            heapq.heappush(candidate_jewels, -jewels[jewel_idx][1])
            jewel_idx += 1

        if candidate_jewels:
            total_value -= heapq.heappop(candidate_jewels)

    print(total_value)


solve()