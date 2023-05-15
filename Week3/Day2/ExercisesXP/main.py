#1. Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'
    
#childrens
class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal = Bengal("Benny", 3)
chart = Chartreux("Charty", 8)
simmy = Siamese("Simmy", 5)

all_cats = [bengal, chart, simmy]

sara_pets = Pets(all_cats)
sara_pets.walk()



#Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.


class Dog:

    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking."
    
    def run_speed(self):
        speed = self.weight / (self.age*10)
        print(speed)
        return speed
    
    def fight(self, other_dog):
        if (self.run_speed()*(self.weight)) > (other_dog.run_speed() * other_dog.weight):
            print(f"{self.name} is winner!")
        else:
            print(f"{other_dog.name} - is winner!")

    
dog1 = Dog("Maks", 5, 15)
dog2 = Dog("Nikson", 7, 10)
dog3 = Dog("Jack", 6, 20)
dog1.run_speed()
dog2.run_speed()
dog3.run_speed()
dog1.fight(dog2)
dog2.fight(dog3)



