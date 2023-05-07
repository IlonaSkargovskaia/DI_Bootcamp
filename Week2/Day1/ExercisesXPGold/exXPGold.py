# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

hello = 'Hello world\n' * 4
love = 'I love python\n' * 4
print(f'{hello}{love}')


# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

month = int(input('Write a number of month between 1 to 12: '))
if 3 <= month < 6:
    print('Your season is Spring')
elif 6 <= month < 9:
    print('Your season is Summer')
elif 9 <= month < 12:
    print('Your season is Autumn')
else:
    print('Your season is Winter')