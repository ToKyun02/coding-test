import sys
from bisect import bisect_right
input = sys.stdin.readline
sys.setrecursionlimit(100_000)


def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]


def use_card(x):
    parent[x] = find(x + 1)


N, M, K = map(int, input().split())
blue_cards = list(map(int, input().split()))
red_cards = list(map(int, input().split()))

blue_cards.sort()

parent = list(range(M + 1))

results = []
for red in red_cards:
    ans_idx = bisect_right(blue_cards, red)

    real_idx = find(ans_idx)

    results.append(blue_cards[real_idx])
    use_card(real_idx)

print('\n'.join(map(str, results)))