import sys

# 1. 입력 속도 최적화
input = lambda : sys.stdin.readline().strip()


def solve():
    N = int(input())
    trie_root = {}

    for _ in range(N):
        k, *arr = input().split()

        trie = trie_root
        for c in arr:
            if c not in trie:
                trie[c] = {}
            trie = trie[c]

    def print_res(trie, depth):
        for key in sorted(trie.keys()):
            print("--" * depth + key)
            print_res(trie[key], depth + 1)

    print_res(trie_root, 0)

solve()