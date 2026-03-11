import sys

input = lambda: sys.stdin.readline().strip()

MOD = 1_000_000_007


class SegTree:
    def __init__(self, n, init_arr):
        size = 1
        while size < n:
            size <<= 1
        tree = [1] * (size * 2)

        for i in range(0, n):
            tree[size + i] = init_arr[i] % MOD

        for i in range(size - 1, 0, -1):
            tree[i] = tree[i * 2] * tree[i * 2 + 1] % MOD

        self.tree = tree
        self.size = size

    def update(self, b, c):
        idx = self.size + b - 1
        self.tree[idx] = c
        while idx > 1:
            idx //= 2
            self.tree[idx] = self.tree[idx * 2] * self.tree[idx * 2 + 1] % MOD

    def query(self, b, c):
        left = self.size + b - 1
        right = self.size + c - 1
        res = 1
        while left <= right:
            if left % 2 == 1:
                res = res * self.tree[left] % MOD
                left += 1
            if right % 2 == 0:
                res = res * self.tree[right] % MOD
                right -= 1

            left //= 2
            right //= 2
        return res


N, M, K = map(int, input().split())
init_arr = []
for _ in range(N):
    init_arr.append(int(input()))

# 초기화
seg_tree = SegTree(N, init_arr)

# 쿼리
for _ in range(M + K):
    a, b, c = map(int, input().split())
    if a == 1:
        seg_tree.update(b, c)
    else:
        res = seg_tree.query(b, c)
        print(res)
