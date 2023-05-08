#sequence


# colors = ['blue', 'red', 'pink']
# my_favorite_color = colors[1]
# print(my_favorite_color)

# colors = ['blue', 'red', 'pink', ['a', 'b', 'c']]
# letters_c = colors[3][2]
# print(letters_c)


# dir(list) - все методы в теминале к спискам

# colors = ['blue', 'red', 'pink']
# colors.append('yellow') # add the color to the end

# colors.insert(1, 'green')
# print(colors)


# sentence = 'Hello world How are you'
# lst_word = sentence.split(' ') # ['Hello', 'world', 'How', 'are', 'you']
# print(lst_word)

# colors = ['blue', 'red', 'pink']

# # deleting by index:
# # colors.pop() #delete last element
# # colors.pop(1) #delete the element at position 1

# #deleting by value
# colors.remove("red")

# #copy list
# colors = ['blue', 'red', 'pink']
# new_list = colors[:]

# colors = ['blue', 'red', 'pink']
# new_list = colors[::2] #шаг 2 при прохождении всего лист, выбираем каждый второй элемент


# list1 = [5, 10, 15, 20, 25, 50, 20]
# # list1[3] = 200

# # better way
# find_number = list1.index(20) # 3 position
# list1[find_number] = 200
# print(list1)


#loops
numbers = [1, 2, 3, 4, 5]
for num in range(1, len(numbers)-1):
    if numbers[num] % 2 == 0:
        print('the number is even')
    else:
        print('the number is odd')


# for num in range(6): # 0 - 5

print(list(range(1, 6)))

for num in range(1, 6):
    print(num)