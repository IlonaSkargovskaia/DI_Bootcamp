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


#2
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
