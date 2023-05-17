# import os
# current_directory = os.getcwd()
# print(current_directory)

# r = reading (get data)
# story = alias
with open("/Users/ilona/Desktop/DI_Bootcamp/DI_Bootcamp/Week3/Day4/lesson_notes/choco.txt", "r") as story:
    print(story.read())

#take all the lines and push to the list
with open("/Users/ilona/Desktop/DI_Bootcamp/DI_Bootcamp/Week3/Day4/lesson_notes/choco.txt", "r") as story:
    lst = story.readlines()
    print(lst)

# #append to the end of the file
# with open("choco.txt", "a") as story:
#     story.write("\n I love chockolate")

# #ovveride all text
# with open("choco.txt", "w") as story:
#     story.write("I love chockolate")

# #вставить в середину
# with open("choco.txt", "r+") as story:
#     lst = story.readlines()
#     lst.insert(2, "BLA BLA BLA") 
    
# with open("choco.txt", "w") as story:
#     story.writelines(lst)

