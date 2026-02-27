import sys

input = lambda : sys.stdin.readline().rstrip()

found = False

def search(x,y,weights,index,prefix_sum):
    global found

    if x <= prefix_sum <= y :
        found = True
        return
    if (index >= 5) or found or (prefix_sum > y):
        return
    
    
    search(x,y,weights, index+1, prefix_sum)
    search(x,y,weights, index+1, prefix_sum + weights[index])

def solve():
    test_case = int(input())
    global found

    for _ in range(test_case):
        found = False
        x, y = [int(i) for i in input().split(' ')]
        weights = [int(i) for i in input().split(' ')]
        search(x,y,weights,0,0)
        print("YES" if found else 'NO')

solve()
