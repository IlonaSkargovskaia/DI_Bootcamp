# username = "Josh"
# my_name = username


# print(username) #Josh
# print(my_name) #Josh

# username = "Emma"
# print(username) #Emma
# print(my_name) #Josh


#built in method

# email = "jon@mail.ru"
# position = email.find("@")
# print(position)

# my_age = 31 + 123879
# print(my_age)

# user_miles = int(input('Write miles: '))
# convert_km = user_miles * 1.6
# print(round(convert_km))

# first_name = 'Ilona'
# last_name = 'Skargovskaya'
# print(f"{first_name} {last_name}")

#conditionals

bank_amount = 2500
computer_price = 5000
phone_price = 2000

if bank_amount >= computer_price:
    print('I can buy a computer')
elif bank_amount >= phone_price:
    print('I can buy a phone')
else:
    print("you don't have enough money")