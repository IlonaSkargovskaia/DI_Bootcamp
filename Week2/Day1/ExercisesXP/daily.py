# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.

user_str = input('Write the sentence, please: ')
if len(user_str) <= 10:
    print('string not long enough')
elif len(user_str) > 10:
    print('string too long')
elif user_str == '':
    print("you didn't enter any character")


# 2. Then, print the first and last characters of the given text.

first_letter = user_str[0]
last_letter = user_str[len(user_str) - 1]
print(f'First letter from your string is {first_letter} and the last letter is {last_letter}')