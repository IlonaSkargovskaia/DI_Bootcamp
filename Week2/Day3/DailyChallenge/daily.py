#Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

#"dodo" ➞ { "d": [0, 2], "o": [1, 3] }


# user_answer = input('Write your word: ')
# word_dict = {}

# for position,letter in enumerate(user_answer):

#     if letter in word_dict:
#         word_dict[letter].append(position)
#     else:
#         word_dict[letter] = [position]
    
# print(word_dict)



#Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.


items_purchase = {
    "Water" : "1",
    "Bread" : "3",
    "Bananas" : "4",
    "Pan": "100",
    "Spoon": "2"
}

wallet = int(input('How much money do you have ($)? '))

#получаю значения из словаря
get_values = items_purchase.values()
#перевожу строки в числа и получаю массив значений [1, 3, 4, 100, 2]
get_values_num = []
for item in get_values:
    get_values_num.append(int(item))


#цикл, где в кошельке по очереди будет отниматься стоимость каждого продукта 
for item in get_values_num:
    while wallet > 0:
        
   



print(get_values_num)

