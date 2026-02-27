import sys

ip = sys.stdin.readline

def input_():
    try:
        n = int(ip())
        words = [ip().strip() for _ in range(n)]
        return n,words
    except:
        return -1,[]

while True:
    N, words = input_()
    if N == -1:
        break
    trie_root = {}

    for i in range(N):
        s = words[i]
        trie = trie_root

        for c in s:
            if c not in trie:
                trie[c] = {}
            trie = trie[c]
        trie['#'] = True
    total_cnt = 0
    for s in words:
        cnt = 1
        cur = trie_root[s[0]]
        for i in range(1, len(s)):
            child_cnt = len(cur)
            if child_cnt > 1:
                cnt+=1
            cur = cur[s[i]]
        total_cnt+=cnt
    print(f"{round(float(total_cnt/N),2):.2f}")