import sys

input = lambda : sys.stdin.readline()

INF = float('inf')
N = int(input())
M = int(input())


table = [[INF for _ in range(N)] for _ in range(N)]

for i in range(N):
    table[i][i] = 0

for _ in range(M):
    u, v, w = map(int, input().split())
    table[u-1][v-1] = min(table[u-1][v-1],w)

for k in range(N):
    for i in range(N):
        for j in range(N):
            if table[i][k] + table[k][j] < table[i][j]:
                table[i][j] = table[i][k] + table[k][j]

for i in range(N):
    for j in range(N):
        if table[i][j] >= INF:
            table[i][j]=0


for row in table:
    print(' '.join(list(map(str, row))))