# 1) Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
print(('Hello world \n') * 5)

# 2) Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8)
print((99 ** 3) * 8)

#4) Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".
computer_brand = "Mac"
print('I have a ' + computer_brand + ' computer')

# 5) Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code
name = 'Ilona'
age = '31'
shoe_size = 38
info = 'Hi! My name is ' + name + '. I am ' + age + '. I like shopping very much and most of all I like to buy shoes. By the way my shoe size is ' + str(shoe_size) + ' and what about you?'
print(info)


# 6) Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a = 8
b = 4
if a > b:
    print('Hello world')


# 7) Write code that asks the user for a number and determines whether this number is odd or even.

user_num = int(input('Write number: '))
if (user_num % 2) == 0:
    print('Your number is Even')
else:
    print('Your number is Odd')


# 8) Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

user_name = str(input('Write your name: '))
if (user_name) == 'Ilona':
    print('Wow, your name is the same as mine! it is a rarity!')
else:
    print(f'Nice to meet you {user_name}')



# 9) Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

user_height = int(input('Write your height: '))
if (user_height) >= 145:
    print('You are tall enough to ride!')
else:
    print('You need to grow some more to ride :(')



get_num = int(input('Write a number between 1 to 100: '))
if (get_num % 3 == 0) and (get_num % 5 == 0):
    print ('FizzBuzz')





