#Convert the two following lists, into dictionaries.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

zip_list = zip(keys, values)
print(dict(list(zip_list))) #['Ten' : 10, 'Twenty' : 20, 'Thirty' : 30]


# 2. A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

family = {
    "rick" : 43,
    "beth" : 13,
    "morty" : 5,
    "summer" : 8
}

user_name = input("Write your name: ")
user_age = int(input("Write your age: "))

family[user_name] = user_age 

#prices
old_price = 15
kids_price = 10
baby_price = 0

#total for family
total = 0

for name, age in family.items():
    
    if age >= 12:
        print(f"{name} is old person and price is {old_price}$")
        total += old_price
    elif 3 <= age < 12:
        print(f"{name} is child and price is {kids_price}$")
        total += kids_price
    else:
        print(f"{name} is baby and price is {baby_price}$")
        total += baby_price


print(f"Total price for tickets is {total}")






