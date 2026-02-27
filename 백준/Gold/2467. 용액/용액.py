import sys

input = sys.stdin.readline

def solve():
    N = int(input())
    arr = list(map(int, input().split()))
    l = 0
    r = len(arr)-1

    min_v = float('inf')
    r1 = r2 = 0
    while l<r:
        v = arr[l] + arr[r]
        if abs(v) < min_v:
            min_v = abs(v)
            r1 = l
            r2 = r
        if v < 0:
            l+=1
        else:
            r-=1

    print(arr[r1], arr[r2])

solve()