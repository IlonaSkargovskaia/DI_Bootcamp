# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {10, 20, 30, 40}
my_fav_numbers.add(50)
my_fav_numbers.add(60)
my_fav_numbers.remove(list(my_fav_numbers)[-1]) #remove last element with converting to list
print(my_fav_numbers)


friend_fav_numbers = {3, 6, 8, 10}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) #concatenate two sets
print(our_fav_numbers)


#Given a tuple which value is integers, is it possible to add more integers to the tuple?

a_tuple = (1, 2, 3)
# we can't added more numbers, because tuples can't be change, we can't add, change, or remove items


#Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.pop(0)
basket.pop()
basket.append('Kiwi')
basket.insert(0, 'Apples')
basket.count('Apples')
basket.clear()
print(basket)


# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

import numpy as np

float_numbers = []
for i in np.arange(1.5, 5.5, 0.5):
    float_numbers.append(i)

print(float_numbers)


 #Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for num in range(1, 21):
    print(num) # 1,2,3 ..

for even in range(1, 21):
    if even % 2 == 0:
        print(even) # 2, 4, 6 ...

# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "Ilona"
user_answer = ''

while user_answer != my_name:
    user_answer = input('Write your name: ')

print('You write right name!')


# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

user_fav_fruits = input('Write your favorite fruits, separate them with space: ')
user_fav_fruits_list = user_fav_fruits.split()
print(user_fav_fruits_list)
ask_user = str(input('Write name of fruit: '))

if ask_user in user_fav_fruits_list:
    print('You chose one of your favorite fruits! Enjoy!')
else:
    print('You chose a new fruit. I hope you enjoy')