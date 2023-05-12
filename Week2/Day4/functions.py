# #creating

# def say_hello() :
#     print("hello")

# #calling function
# say_hello()

# def say_hello():
#     print(f"Hello {username}")


# #parameters
# def say_hello(username) :
#     print(f"Hello {username}")

# #argument
# say_hello("John")
# say_hello("David")
# say_hello("John")
# # say_hello(input('what is your name: '))


# #numbers 2
# def add_numbers(a, b) :
#     total = a + b
#     print(total)

# add_numbers(2, 6)
# add_numbers(12, 16)



# #numbers 3
# def add_numbers (a, b, operation) :
#     if operation == "plus":
#         total = a + b
#     elif operation == "minus":
#         total = a - b
#     print(total)

# add_numbers(3, 10, "minus")


# #SCOPES (области видимости)

# #variable inside the function - local/ outside - global

# def create_information(user):
#     favorite_color = "blue"
#     print(f"{user} lives {favorite_color}")

# create_information("John")




# #even or odd

# def odeven(a) :
#     if a % 2 == 0:
#         print(f"Your number {a} is even")
#     else:
#         print(f"Your number {a} is odd")

# odeven(5)
# odeven(6)


# #Create a functions that receives a list of numbers, and check if each number is even or odd

# def list_num(list):
#     for item in list:
#         if item % 2 == 0:
#             print(f"Number in list {item} is even")
#         else:
#             print(f"Number in list {item} is odd")

# list_num([1, 3, 4, 6])
# list_num([2, 11, 5, 8])



# #Default Parameters
# def add_numbers (a, b, operation = "plus") :
#     if operation == "plus":
#         total = a + b
#     elif operation == "minus":
#         total = a - b
#     print(total)

# add_numbers(3, 10)


# #keyword arguments
# def add_numbers (a, b, operation) :
#     if operation == "plus":
#         total = a + b
#     elif operation == "minus":
#         total = a - b
#     print(total)

# #если хочу изменить порядок передачи параметров
# add_numbers(operation="minus", b = 34, a = 12)



#return

#1 function per action

# #total out of list prices
# def get_total_restaurant():
#     prices = [20, 34, 54, 21]
#     total = 0
#     for price in prices:
#         total += price

#     return total
    
#     print(total)

# #tax depending from the country
# def get_total_with_taxes(country):
#     if country == "USA":
#         tax = 1.2
#     else:
#         tax = 1.1
#     new_total = total * tax

# get_total_with_taxes("USA")
# get_total_restaurant()





# def get_username():
#     my_name = "John"
#     return my_name

# print(get_username())
# username = get_username()




# def get_username(user):
#     return user

# print(get_username("John"))



#example return

# def get_firstname():
#     my_name = "John"
#     return my_name

# def get_lastname():
#     my_family = "Smith"
#     return my_family

# def get_full_name():
#     name = get_firstname() #John
#     last = get_lastname() #Smith
#     fullname = print(f'{name} {last}') 
#     return fullname

# print(get_full_name())




#exercise

# Implement super_vowels function which takes a string as an argument and returns a modified version of that string.
# In the return value of super_vowels, all vowels should be in upper case whereas all consonants should be in lower case. The vowels are listed in the VOWELS variable.
# VOWELS = ['a', 'e', 'i', 'o', 'u']

VOWELS = ['a', 'e', 'i', 'o', 'u']

def super_vowels(string) :
    new_str = []
    for letter in string:
        if letter in VOWELS:
            new_str.append(letter.upper())
        else:
            new_str.append(letter.lower())
    
    ch_string = ''.join(new_str)
    print(ch_string)
    return ch_string
    
my_sentence = super_vowels('aoftrpsdga')
print(my_sentence)


