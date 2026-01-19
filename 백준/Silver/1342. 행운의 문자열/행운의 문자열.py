def find_lucky_string(dict:dict, string, length, char, index):
    cnt = 0
    
    if index == length:
        return 1

    for key in dict.keys() :
        if  dict[key] == 0 or key == char :
            continue
        dict[key]-=1
        cnt += find_lucky_string(dict, string, length, key, index+1)
        dict[key]+=1
    
    return cnt

def convert_to_dict(string):
    string_dict = {}
    for char in string:
        if not char in string_dict:
            string_dict[char] = 1
        else:
            string_dict[char] += 1
    return string_dict


def solve():
    string = input()
    length = len(string)
    string_dict = convert_to_dict(string)
    answer = find_lucky_string(string_dict,string, length, '', 0)

    print(answer)

solve()