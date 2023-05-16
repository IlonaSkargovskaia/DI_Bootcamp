class Dog:

    #class atribute = global variable constant для каждого объекта постоянное знач
    amount_dog = 0
    dog_park = "TLV dog park"
    all_dogs = []

    def __init__(self, a, x, y, m): 
        self.name = a
        self.color = x
        self.breed = y
        self.age = m
        Dog.amount_dog += 1 # сколько объектов есть внутри класса
        Dog.all_dogs.append(self.name) #при создании нового объекта доавляем в лист имя


    #work with file
    def __str__(self): #покажи строкой мой объект
        return f"{self.name} is a {self.color} {self.breed}"
    
john_dog = Dog('rex', 'brown', 'chihuahua', 3)

john_dog.dog_park = "Ramat Gan"
sara_dog = Dog('lola', 'white', 'malin', 5)
print(Dog.amount_dog) #class_atribute - access доступ with the class
print(john_dog.dog_park) # Ramat gan
print(Dog.all_dogs) #выводим список имен