import sys

input = sys.stdin.read


def solve():
    data = input().split()

    N = int(data[0])
    a_arr, b_arr, c_arr, d_arr = [], [], [], []

    for i in range(N):
        a_arr.append(int(data[1 + i * 4]))
        b_arr.append(int(data[2 + i * 4]))
        c_arr.append(int(data[3 + i * 4]))
        d_arr.append(int(data[4 + i * 4]))

    ab_dict = {}
    for a in a_arr:
        for b in b_arr:
            s = a + b
            ab_dict[s] = ab_dict.get(s, 0) + 1

    cnt = 0
    for c in c_arr:
        for d in d_arr:
            target = -(c + d)
            if target in ab_dict:
                cnt += ab_dict[target]

    print(cnt)


solve()