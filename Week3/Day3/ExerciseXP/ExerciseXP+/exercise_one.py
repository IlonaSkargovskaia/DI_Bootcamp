#1 task
from func import myadd

myadd(13, 4)


#Exercise 2: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.

def ex_2():
    import random

    def rand_num(num):

        if num == random.randint(1, 100):
            print(f"Random number between 1 and 100 is {random.randint(1, 100)}")
        else:
            print("Random number is other")

    rand_num(45)

ex_2()

#Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

def ex_3():
    import random
    import string

    rand_str = ''.join(random.choices(string.ascii_letters, k=5))
    print(rand_str)

ex_3()

#Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

def ex_4():
    import datetime

    current_date = datetime.date.today()
    print(f"Today is {current_date}") #2023-05-16

ex_4()

#Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

def ex_5():
    from datetime import datetime

    first_jan = datetime(year = 2024, month = 1, day = 1, hour = 0, minute = 0, second = 0)
    today = datetime.now()
    result = first_jan - today
    print("The 1st of January is in", result)

ex_5()

#Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def ex_6():
    from datetime import datetime
    bday = datetime.strptime(input("What day is your birthday? DD-MM-YYYY: "), "%d-%m-%Y")
    days = datetime.now() - bday
    res_to_minutes = int(days.total_seconds() / 60)
    print("You live in the Earth: ", res_to_minutes, "minutes")

ex_6()


#Exercise 7 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

def ex_7():

    from datetime import datetime

    current_date = datetime.today()
    holiday = datetime.strptime("2023-05-25", "%Y-%m-%d")

    time_to_holiday = {
        "name": "Shavuot",
        "date": holiday,
        "now" : holiday - current_date               
    }

    print(f"{time_to_holiday['name']} will be in {time_to_holiday['now'].days} days and "
          f"{round(int(time_to_holiday['now'].seconds) / 3600)} hour(s)")
    #Shavuot will be in 8 days and 1 hour(s)
ex_7()



#Exercise 8 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

def ex_8(sec):
    our_planet = round(sec / 31557600, 2)
    print(our_planet)

    how_old = {
        "our_planet" : our_planet,
        "merkuriy" : our_planet * 0.2408467,
        "venera" : our_planet * 0.61519726,
        "mars" : our_planet * 1.8808158,
        "yupiter" : our_planet * 11.862615,
        "saturn" : our_planet * 29.447498,
        "uran" : our_planet *  84.016846,
        "neptun" : our_planet * 164.79132
    }
    result = str(how_old)
    print(result)

ex_8(1000000000)


#Exercise 9 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker
fake = Faker()

users = []

def new_user():
    new_user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }

    print(new_user)
new_user()
