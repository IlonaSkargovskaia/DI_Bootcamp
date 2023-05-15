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


def create_sentence() :
    lst = cr_matrix() 
    sentence = ""
    for column in lst : 
        for char in column:
            if char.isalpha() :
                sentence += char
            else :
                sentence += " "

    print(sentence)

create_sentence()
