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
    "Water" : "$1",
    "Bread" : "$3",
    "Bananas" : "$4",
    "Pan": "$1000",
    "Spoon": "$2"
}

wallet = int(input('How much money do you have ($)? '))

get_pairs = items_purchase.items() #[('Water', '$1'), ('Bread', '$3'), ('Bananas', '$4'), ('Pan', '$100'), ('Spoon', '$2')]
print(get_pairs)

can_buy = []

for key, value in get_pairs:
    #убираем все что не число
    value = int(''.join(ch for ch in value if ch.isdigit()))
    print(value)

    if value <= wallet:
        can_buy.append(key)

if len(can_buy) == 0:
    print("Nothing")

can_buy = sorted(can_buy)
print(can_buy)


