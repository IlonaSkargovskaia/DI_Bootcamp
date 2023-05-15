# Create a class called Family and implement the following attributes:

# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)
# Initial members data:

# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]


class Family:

    def __init__(self, last_name):
        self.members = [
                    {'name':'Michael','age':35,'gender':'Male','is_child':False},
                    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
                ]
        self.lastname = last_name
        
    def born(self, **child):
        self.members.append(child)
        print(f"Congratulation to the {self.lastname} family")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if int(member['age']) > 18:
                    return True
                else:
                    return False
                
    def family_presentation(self):
        print(f"Family {self.lastname} consists of:")
        for item in self.members:
            print(item['name'])
        

child = Family("Skargovskiy")
child.born(name='Kristy', gender='female', age='1', is_child=True)

child.is_18("Sarah")
child.family_presentation()

