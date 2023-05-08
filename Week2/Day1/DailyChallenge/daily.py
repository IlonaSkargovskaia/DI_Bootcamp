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

# 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. 

for x in range(len(user_str)):
    print(user_str[: x + 1])


#4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). 

import random

new_str = list(user_str)
random.shuffle(new_str)
print(''.join(new_str))


