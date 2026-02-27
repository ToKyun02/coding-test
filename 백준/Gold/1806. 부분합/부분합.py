import sys

input = sys.stdin.readline

N, S = map(int, input().split())
arr = list(map(int, input().split()))


l = r = 0
cur_sum = 0
res = float('inf')

while True:
    if cur_sum >= S:
        res = min(res, r-l)
        cur_sum -= arr[l]
        l +=1
    elif r >= N:
        break
    else:
        cur_sum += arr[r]
        r += 1
print(res if res < float('inf') else 0)



