# list : sequence of elements

# create a list 
# alphabet = ["a", "b", "c"]

# 1. retrieve elements from a list
# first_letter = alphabet[0] # "a"

# 2. add element in the list

# alphabet.insert(2, "w") # ["a", "b", "w", "c"]
# alphabet.append("hello") # ["a", "b", "w", "c", "hello"]

# 3. delete from the list

# alphabet.pop() # ["a", "b", "w", "c"]
# alphabet.pop(2) # ["a", "b", "c"]
# alphabet.remove("b") # ["a", "c"]

# 4. copy a part of a list or the whole list

# colors = ["blue", "red", "yellow", "pink"]

# colors[1:3] # 3 is not included ["red", "yellow"]
# colors[1:] # ["red", "yellow", "pink"]
# colors[:] # ["blue", "red", "yellow", "pink"]
# colors[::3]  # ["blue", "pink"]

# 5. Transform a string into a list

# sentence = "hello*world*my*name*is*john" 
# sentence.split("*") # --> ["hello", "world", "my", "name", "is", "john"]


# #loops
# numbers = [1, 2, 3, 4, 5]
# for num in range(1, len(numbers)-1):
#     if numbers[num] % 2 == 0:
#         print('the number is even')
#     else:
#         print('the number is odd')


# # for num in range(6): # 0 - 5

# print(list(range(1, 6)))

# for num in range(1, 6):
#     print(num)