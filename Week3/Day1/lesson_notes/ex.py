class Cat:
    def __init__(self, breed, color, age):
        self.breed = breed #порода
        self.color = color
        self.age = age

    def meow(self):
        print('Мяу!')

    def purr(self):
        print('Мрррр')


class HomeCat(Cat):

    def __init__(self, breed, color, age, owner, name):
        super().__init__(breed, color, age)
        self.owner = owner
        self.name = name

    def getTreat(self):
        print('Мяуу')

cat1 = Cat('Абиссинская', 'Рыжая', 4)
cat2 = Cat('Британская', 'Серая', 2)

cat3 = HomeCat('Британская', 'Серая', 2, "Jack", "Keks")
print(cat3.owner) #Jack
cat3.getTreat() #мяуу
cat3.purr() #Мрррр

