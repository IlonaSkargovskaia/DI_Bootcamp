# Write code that concatenates two lists together without using the + sign.

def ex_1():
    list1 = [1,2,5,8]
    list2 = [3,6,8,9]

    for i in list2:
        list1.append(i)
    print(list1)
ex_1()

#Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

def ex_2():
    for i in range(1500, 2500):
        if i % 5 == 0 and i % 7 == 0:
            print(i)



#ex3

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_answer = input("Write your name: ")
if user_answer in names:
    print(names.index(user_answer))