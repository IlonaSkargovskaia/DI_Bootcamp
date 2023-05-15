# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
#
# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
#
# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

#import file from (what_file) import (which_class)
from main import Dog
import random

class PetDog(Dog):

    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        print(f"{self.bark()}")

    def play(self, *dog_names): 
        all_dogs = ''
        for dog in dog_names:
            all_dogs += f"{dog.name} "
        print(f"{all_dogs}play together")
        
    def do_a_trick(self):
        sent = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        random_sent = random.choice(sent)
        if self.trained == True:
            print(f"{self.name} {random_sent}") 
            


pet1 = PetDog("mikki", 1, 2)
pet2 = PetDog("richy", 2, 3)
pet3 = PetDog("bunny", 1, 1)
pet1.train()
pet1.play(pet2, pet3)
pet1.do_a_trick()