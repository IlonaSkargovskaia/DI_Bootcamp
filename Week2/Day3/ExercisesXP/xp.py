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
old_price = 15
kids_price = 10
baby_price = 0

total = 0

for age in family.values():
    # print(price)
    if age >= 12:
        print(f"You are old person and price is {old_price}$")
        total += old_price
    elif 3 <= age < 12:
        print(f"You are child and price is {kids_price}$")
        total += kids_price
    else:
        print(f"You are baby and your price is {baby_price}$")
        total += baby_price

print(f"Your total price for tickets is {total}")




