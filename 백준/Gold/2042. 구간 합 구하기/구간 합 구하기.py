import sys

input = lambda: sys.stdin.readline().strip()


class SegTree:
    def __init__(self, n, arr):
        size = 1
        while size < n:
            size <<= 1
        self.arr = [0] * (size * 2)
        self.size = size

        # 리프 노드 삽입
        for i in range(n):
            self.arr[self.size + i] = arr[i]

        # root 구하기
        for i in range(size - 1, 0, -1):
            self.arr[i] = self.arr[i * 2] + self.arr[i * 2 + 1]

    def update(self, idx, data):
        leaf_idx = self.size + idx - 1
        self.arr[leaf_idx] = data
        while leaf_idx > 1:
            leaf_idx //= 2
            self.arr[leaf_idx] = self.arr[leaf_idx * 2] + self.arr[leaf_idx * 2 + 1]

    def query(self, b, c):
        l = self.size + b - 1
        r = self.size + c - 1
        res = 0
        while l <= r:
            if l % 2 == 1:
                res += self.arr[l]
                l += 1
            if r % 2 == 0:
                res += self.arr[r]
                r -= 1
            l //= 2
            r //= 2
        return res


N, M, K = map(int, input().split())

# M = 변경 횟수
# K = 구간 합 구하는 횟수

# segTree 초기화

arr = []
for _ in range(N):
    arr.append(int(input()))

seg_tree = SegTree(N, arr)

for _ in range(M + K):
    a, b, c = map(int, input().split())
    if a == 1:
        # b번째 수를 c로 바꾸기
        seg_tree.update(b, c)
    else:
        # b번째 부터 c번째 수까지의 합 구하기
        res = seg_tree.query(b,c)
        print(res)
