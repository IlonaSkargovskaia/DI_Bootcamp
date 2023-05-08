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


