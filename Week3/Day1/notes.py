#ООП - в python все - объект

# Один из популярных подходов к решению проблем — создание объектов. Это называется объектно-ориентированным программированием (ООП). 

# У объекта есть две характеристики: 

# атрибуты;
# поведение.
# Рассмотрим пример. Допустим, наш объект — это попугай. У попугая есть такие свойства:

# Имя, возраст, цвет. Это атрибуты.
# То, как попугай поет и танцует. Это поведение. 


#класс описывающий попугая, а из классов получаем объекты созданные по подобию этого класса (детки)
#class Parot:
#    pass

#объект - ребенок класса 
#obj = Parrot()

class Dog:
    pass

#создала объект и отнесла его к классу dog()
shelter_dog = Dog()

#характеристики объекта (атрибуты)
shelter_dog.color = "Brown"
# мы можем изменить просто переопределив так
shelter_dog.color = "Blue"

print(shelter_dog.color)

#__init__, self (здесь все объекты - self поэтому нужно писать self.attribute = value)

class Dog():
    def __init__(self, name_of_the_dog) -> None:
        print("A new dog has been initialized!")
        print("His name is", name_of_the_dog)
        #self 
        self.name = name_of_the_dog

shelter_dog = Dog('Rex')
shelter_dog = Dog('Jimmy')

print(Dog(shelter_dog))

class Point():
    def __init__(self, x, y):
        self.x = x
        self.y = y

## create an instance of the class
p = Point(3,4)

## access the attributes
print("p.x is:", p.x) #3
print("p.y is:", p.y) #4




class Car:
    #init function - constructor function
    def __init__(self):
        self.brand = "Ferrari"
        self.color = "Red"
        self.speed = 200

my_car = Car()
friend_car = Car()
print(my_car.color)


class Car:
    #init function - constructor function
    def __init__(self, car_brand, car_color, car_speed):
        self.brand = car_brand
        self.color = car_color
        self.speed = car_speed

my_car = Car("Mazda", "pink", 180)
my_friend_car = Car("Renault", "black", 200)
print(my_car.__dict__)



class Dog:
    def __init__(self, name_dog, age_dog) -> None:
        self.name = name_dog
        self.age = age_dog
        self.energy = 100

    def bark(self):
        print(f"{self.name} said Woof Woof!")

    def play(self, type_game = "stick"):
        if self.energy < 10:
            self.sleep()
        else: 
            if type_game == "ball":
                self.energy -= 10
            elif type_game == "stick":
                self.energy -= 5
            elif isinstance(type_game, Dog):      #if its another dog -70 energy
                self.energy -= 70
                #type_game = other dog
                type_game.energy -= 50
                print(f"{self.name} plays with {type_game.name}")


    def sleep(self):
        self.energy += 50

lea_dog = Dog("Rex", 4)
john_dog = Dog("Lola", 6)
#methods
lea_dog.bark() #Rex said Woof Woof
lea_dog.play("ball")
print(lea_dog.energy)

#сделать самой с новой собакой  


tom_dog = Dog("King", 7)
lea_dog = Dog("Rex", 4)

#lea_dog is whole object/ Rex play with whole object
tom_dog.play(lea_dog)

print(f"{lea_dog.name} energy is {lea_dog.energy}")
