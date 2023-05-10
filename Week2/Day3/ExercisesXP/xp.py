# #1. Convert the two following lists, into dictionaries.

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# zip_list = zip(keys, values)
# print(dict(list(zip_list))) #['Ten' : 10, 'Twenty' : 20, 'Thirty' : 30]


# # 2. A movie theater charges different ticket prices depending on a person’s age.
# # if a person is under the age of 3, the ticket is free.
# # if they are between 3 and 12, the ticket is $10.
# # if they are over the age of 12, the ticket is $15.

# family = {
#     "rick" : 43,
#     "beth" : 13,
#     "morty" : 5,
#     "summer" : 8
# }

# user_name = input("Write your name: ")
# user_age = int(input("Write your age: "))

# family[user_name] = user_age 

# #prices
# old_price = 15
# kids_price = 10
# baby_price = 0

# #total for family
# total = 0

# for name, age in family.items():
    
#     if age >= 12:
#         print(f"{name} is old person and price is {old_price}$")
#         total += old_price
#     elif 3 <= age < 12:
#         print(f"{name} is child and price is {kids_price}$")
#         total += kids_price
#     else:
#         print(f"{name} is baby and price is {baby_price}$")
#         total += baby_price


# print(f"Total price for tickets is {total}")


## 3. Zara

# brand = {
#     "name" : "Zara",
#     "creation_date" : 1975,
#     "creator_name" : "Amancio Ortega Gaona",
#     "type_of_clothes" : ["men", "women", "children", "home"],
#     "international_competitors" : ["Gap", "H&M", "Benetton"],
#     "number_stores" : 7000,
#     "major_color" : {
#                     "France" : "blue",
#                     "Spain" : "red",
#                     "USA" : ["pink", "green"]
#                     }
# }

# #3
# brand["number_stores"] = 2

# #4
# #delete last element from types and get a string with type of clients
# brand["type_of_clothes"].pop()
# clients_list = brand["type_of_clothes"]
# clients_string = ', '.join(clients_list)
# print(f"Zara's clients are {clients_string} ")

# #5
# brand["country_creation"] = "Spain"

# #6
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")

# #7
# brand.pop("creation_date")

# #8
# print(brand["international_competitors"][-1])

# #9 - get major-colors in USA
# colors_list = brand["major_color"]["USA"]
# colors_string = ', '.join(colors_list)
# print(colors_string)

# #10 - amount keys-values pairs
# amount_pair = len(brand.keys()) #7
# print(amount_pair)

# #11
# print(brand.keys())


# #12
# more_on_zara = {
#     "creation_date" : 1975,
#     "number_stores" : 10000
# }

# #13 add more_on_zara to brand
# new_brand = dict(brand) #copy of brand
# new_brand.update(more_on_zara)

# #14
# print(new_brand["number_stores"])



users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

tuple_list = list(enumerate(users))
#[(0, 'Mickey'), (1, 'Minnie'), (2, 'Donald'), (3, 'Ariel'), (4, 'Pluto')] 

#1
disney_users_A = {}
for key, val in tuple_list:
    disney_users_A.setdefault(val, key)
print(disney_users_A)


#2
disney_users_B = dict(tuple_list)
print(disney_users_B)

    
#3
disney_users_C = sorted(disney_users_A.items())
print(disney_users_C)




