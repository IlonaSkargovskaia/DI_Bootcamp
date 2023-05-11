#Daily Challenge: Solve The Matrix
secret = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""

def cr_matrix():
    list_one = secret.split("\n")
    new_list = []
    for num in range(3):
        new_list.append([char[num] for char in list_one])
    print(new_list)
    return new_list
cr_matrix()


def sent():
    lst = cr_matrix()
    new_sent = ""
    for col in lst:
        for ch in col:
            if ch.isalpha():
                new_sent += ch
    print(new_sent)
sent()
