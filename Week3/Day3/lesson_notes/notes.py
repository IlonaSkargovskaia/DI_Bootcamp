# class Dog:

#     def __init__(self, x, y, m): #self = my_object
#         #self.size = 30 #hardcoding attributes, у всех объектов это будет одинаковым
#         self.color = x
#         self.breed = y
#         self.age = m

#     def show(self):
#         print(f"The dog is a {self.color} {self.breed}")

#     def check_breed(self, best):
#         if {self.breed} == best:
#             print("The dog is the best")
#         else:
#             print("The dog is not the best")

#     def get_oldest_dog(self, other_dog):
#         #print(other_dog.__dict__)
#         if self.age > other_dog.age:
#             print("fgskjg")


# john_dog = Dog("brown", "chihuahua", 3)
# sara_dog = Dog("white", "german shepard", 5)

# john_dog.show()
# best_breed = "german shepard"
# john_dog.check_breed(best_breed)

# john_dog.get_oldest_dog(sara_dog)
# #self - john
# #other - sara




#import random
#import name_of_file

# import random as r
# r.randint

#from random import randint, choice
# from name_of_file import name_of_function - только конкретное что-то импортируем


class Dog:

    def __init__(self, a, x, y, m): 
        self.name = a
        self.color = x
        self.breed = y
        self.age = m


    #work with file
    def __str__(self): #покажи строкой мой объект
        return f"{self.name} is a {self.color} {self.breed}"
    
    #represent the object to the developer only
    #work with shell
    def __repr__(self):
        sentence = f"Dog( - {self.name} {self.color} {self.breed})"
        return sentence
    
    def __gt__(self, other_dog):
        if self.age > other_dog.age:
            return self.name #the dog is older
        else:
            return other_dog.name
        
    def __add__(self, other_dog):
        
        new_breed = f"{self.breed} - {other_dog.breed}"
        new_puppy = Dog("Rex", "black", new_breed, 0) #input("puppy name")
        return new_puppy
    

john_dog = Dog('rex', 'brown', 'chihuahua', 3)
sara_dog = Dog('lola', 'white', 'malin', 5)
#print(john_dog) - str method
# print(repr(john_dog)) - represent method

print(john_dog > sara_dog) #which one is older

puppy = john_dog + sara_dog
#puppy is Dog object
print(puppy) #str_metod


    


# dunder methods
#print(dir(Dog("brown", "chihuahua", 3)))
#['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'breed', 'color', 'show'] - dunder methods


# x = 4
# y = 5
# x + y = x.__add__(y) - dunder methods


class PrintList(object):

    def __init__(self, my_list):
        self.mylist = my_list

    def __repr__(self):
        return str(self.mylist)


printlist = PrintList(["a", "b", "c"])
print(printlist.__repr__()) #['a', 'b', 'c']