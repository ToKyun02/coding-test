from math import gcd as get_gcd


a, b = map(int, input().split())
gcd = get_gcd(a,b)
lcm = a*b // gcd

print(gcd)
print(lcm)