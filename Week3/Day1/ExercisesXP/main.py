#1
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:

    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Marty", 5) #{'name': 'Marty', 'age': 5}
cat2 = Cat("Rik", 7)
cat3 = Cat("Ryzhik", 2)

cats = [cat1, cat2, cat3]

def oldest():
    new_lst = [cat1.age, cat2.age, cat3.age]
    return new_lst.index(max(new_lst))
oldest_cat_id = oldest() #1


print(f"The oldest {cats[oldest_cat_id].name} and is {cats[oldest_cat_id].age} years old")


#2Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, name_dog, height_dog):
        self.name = name_dog
        self.height = height_dog

    def bark(self):
        print (f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2}")

davids_dog = Dog("Rex", 50)
davids_dog.bark()
davids_dog.jump()
print(f"David's dog name is {davids_dog.name} and he is {davids_dog.height}cm")

sarahs_dog = Dog("Teacup", 20)
sarahs_dog.bark()
sarahs_dog.jump()
print(f"David's dog name is {sarahs_dog.name} and he is {sarahs_dog.height}cm")

if davids_dog.height > sarahs_dog.height:
    print(f"Davids dog {davids_dog.name} is bigger")
else:
    print(f"Sarahs dog {sarahs_dog.name} is bigger")


#3
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# Then, call the sing_me_a_song method. 

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for item in self.lyrics:
            print(item)

stairway = Song(["Theres a lady who's sure","all that glitters is gold", "and shes buying a stairway to heaven"])
stairway.sing_me_a_song()