import sys

input = lambda: sys.stdin.readline().strip()


class SegTree:
    def __init__(self, n, arr):
        size = 1
        while size < n:
            size <<= 1
        self.size = size
        self.max_tree = [0] * (size * 2)
        self.min_tree = [float('inf')] * (size * 2)

        for i in range(n):
            self.max_tree[size + i] = arr[i]
            self.min_tree[size + i] = arr[i]

        for i in range(size - 1, 0, -1):
            self.max_tree[i] = max(self.max_tree[i * 2], self.max_tree[i * 2 + 1])
            self.min_tree[i] = min(self.min_tree[i * 2], self.min_tree[i * 2 + 1])

    def query(self, a, b):
        l = self.size + a - 1
        r = self.size + b - 1

        min_v = float('inf')
        max_v = 0
        while l <= r:
            if l % 2 == 1:
                max_v = max(max_v, self.max_tree[l])
                min_v = min(min_v, self.min_tree[l])
                l += 1

            if r % 2 == 0:
                max_v = max(max_v, self.max_tree[r])
                min_v = min(min_v, self.min_tree[r])
                r -= 1

            l //= 2
            r //= 2
        return min_v, max_v


N, M = map(int, input().split())
arr = []
for _ in range(N):
    arr.append(int(input()))
seg_tree = SegTree(N, arr)

for _ in range(M):
    a, b = map(int, input().split())
    min_v, max_v = seg_tree.query(a, b)
    print(min_v, max_v)
