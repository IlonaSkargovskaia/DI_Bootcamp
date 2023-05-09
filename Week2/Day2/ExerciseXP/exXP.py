# 1. Create a set called my_fav_numbers with all your favorites numbers.
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


#2. Given a tuple which value is integers, is it possible to add more integers to the tuple?

a_tuple = (1, 2, 3)
# we can't added more numbers, because tuples can't be change, we can't add, change, or remove items


#3. Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
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


# 4. Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

import numpy as np

float_numbers = []
for i in np.arange(1.5, 5.5, 0.5):
    float_numbers.append(i)

print(float_numbers)


# 5. Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for num in range(1, 21):
    print(num) # 1,2,3 ..

for even in range(1, 21):
    if even % 2 == 0:
        print(even) # 2, 4, 6 ...

# 6. Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "Ilona"
user_answer = ''

while user_answer != my_name:
    user_answer = input('Write your name: ')

print('You write right name!')


# 7. Ask the user to input their favorite fruit(s) (one or several fruits).
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



#8 Pizza

run = True
toppings = []

while run:
    user_ans = input('Write your topping (or write "quit" for exit): ')
    if user_ans == 'quit':
        run = False
        break
    toppings.append(user_ans)
    print(f'You added {user_ans}')

total = 10

for topping in toppings:
    total += 2.5
print(toppings)
print(f'Your total price with toppings is {total}')






#9 A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out

run = True
ages = []

while run:
    user_ages = int(input('Write your age (or "0" to exit): '))
    if user_ages == 0:
        run = False
        break
    ages.append(user_ages)

total = 0

for age in ages:
    if age > 12:
        total += 15
    elif 3 <= age <= 12:
        total += 10

print(f'Your total price is {total}')



# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.


#??????



# 10

# Use the above list called sandwich_orders.
# Make an empty list called finished_sandwiches.
# As each sandwich is made, move it to the list of finished sandwiches.
# After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

finished_sandwiches = []

while len(sandwich_orders) > 0:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)

print(finished_sandwiches)