#Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

#"dodo" ➞ { "d": [0, 2], "o": [1, 3] }


user_answer = input('Write your word: ')
word_dict = {}

for position,letter in enumerate(user_answer):
    #we need to add the letters as keys of the dictionary

    if letter in word_dict:
        word_dict[letter].append(position)
    else:
        word_dict[letter] = [position]
    
print(word_dict)