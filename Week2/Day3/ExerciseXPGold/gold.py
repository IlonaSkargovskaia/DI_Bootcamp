#1 Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

def first():
    birthdays = {
    "Mike" : '13/12/2005',
    "Julya" : '12/10/1995',
    "Daniel" : '03/12/2005',
    "Kris" : '01/10/1998',
    "Sam" : '06/02/2003'
    }

    user_answ = input("Write name from the list: ")
    day = birthdays[user_answ]
    print(f"{user_answ}'s birthday is {day}")



#2 + #3

# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)
# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.


def second_third():
    birthdays = {
    "Mike" : '13/12/2005',
    "Julya" : '12/10/1995',
    "Daniel" : '03/12/2005',
    "Kris" : '01/10/1998',
    "Sam" : '06/02/2003'
    }

    user_name = input("Write your name: ")
    user_bday = input("Write your bday: ")

    birthdays[user_name] = user_bday

    names_list = ', '.join(list(birthdays.keys()))
    print(names_list)

    user_answ = ''

    while user_answ not in birthdays.keys():
        user_answ = input("Write name from the list: ")
        if user_answ not in birthdays.keys():
            print(f"Sorry, we dont have the birthday information for {user_answ}")
        else:
            day = birthdays[user_answ]
            print(f"{user_answ}'s birthday is {day}")



#4 Fruit shop

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for key, value in items.items():
    print(f"Key of shop is {key} and value is {value}")

def item_price():
    items = {
        "banana": {"price": 4 , "stock":10},
        "apple": {"price": 2, "stock":5},
        "orange": {"price": 1.5 , "stock":24},
        "pear": {"price": 3 , "stock":1}
    }

    for key, value in items.items():
        #добавляю новый ключ в объект и в произведении получу значение каждого ключа и их умножаю
        value['total'] = value['price'] * value['stock']
        print(f"total price for {key} is {value['total']}")
item_price()











