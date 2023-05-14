class Farm:

    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, new_animal, num_animals = 1):
        if new_animal not in self.animals.keys():
            self.animals[new_animal] = num_animals
        else:
            self.animals[new_animal] += num_animals
        


macdonald = Farm("McDonald's farm")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(f"{macdonald.animals}")



    