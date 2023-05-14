class Farm:

    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, new_animal, num_animals = 1):
        #adding to dictionary
        if new_animal not in self.animals.keys():
            self.animals[new_animal] = num_animals
        else:
            self.animals[new_animal] += num_animals
        
    def get_info(self):
        print(f"{self.name}\n")

        for kind, count in self.animals.items():
            print(f"{kind} : {count}")

        print(f"\n\tE-I-E-I-0!")
        

macdonald = Farm("McDonald's farm")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())




    