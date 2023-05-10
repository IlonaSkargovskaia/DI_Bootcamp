# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.


def display_message(skill1, skill2, skill3):
    return (f"On this course we learning {skill1}, {skill2}, {skill3} and some other technologies")

print(display_message("Python", "Javascript", "Databases"))


# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    tit = print(f"One of my favorite books is {title}")
    return tit
favorite_book('Harry Potter')


#Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.


def describe_city(city, country = "Israel"):
    print(f"{city} is in {country}")

describe_city("Minsk", "Belarus")
describe_city("Jerusalem")


#Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

def rand(num):
    rand_num = random.randint(0,100)
    if rand_num == num:
        print('Numbers are the same')
    else:
        print(f"Random number {rand_num} differs from argument {num}")
rand(9)


#Exercise 5 : Let’s Create Some Personalized Shirts !

def make_shirt(size = "XL", text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("L", "I love you")
make_shirt()
make_shirt("M")
make_shirt(text = "New", size = "S")


#Exercise 6: Magicians

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(list):
    for name in list:
        print(name)

show_magicians(magician_names)


def make_great(list):
    new_list = []
    for name in list:
        new_list.append(name + " the Great")
    print(new_list)
    
make_great(magician_names)




#7 Exercise 7 : Temperature Advice

def get_random_temp(season):
    #temp_num = random.randint(-10,40)
    if season == "winter":
        temp_num = random.randint(-10,5)
    elif season == "autumn":
        temp_num = random.randint(0,15)
    elif season == "summer":
        temp_num = random.randint(18,35)
    elif season == "spring":
        temp_num = random.randint(0,15)
    return temp_num
get_random_temp("winter")


def main(user_answer):

    random_temp = get_random_temp()
    if 32 < random_temp <= 40:
        print(f"The temperature right now is {random_temp} - it's very hot! Stay at home")
    elif 24 < random_temp <= 32:
        print(f"The temperature right now is {random_temp} - nice weather!")
    elif 16 < random_temp <= 24:
        print(f"The temperature right now is {random_temp} - Don't forget your jacket!")
    elif 0 < random_temp <= 16:
        print(f"The temperature right now is {random_temp} - Quite chilly! Dont forget your coat!")
    else:
        print("Brrr, that’s freezing! Wear some extra layers today")
        
    #print(f"The temperature right now is {random_temp} degrees Celsius")
user_season = input('write one of seasons: "winter", "autumn", "summer" or "spring"')
main(user_season)

