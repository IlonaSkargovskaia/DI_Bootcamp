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
        print(f"Family '{self.lastname}' consists of:")
        for item in self.members:
            print(item['name']) #key from every dict
        

child = Family("Skargovskiy")
child.born(name='Kristy', gender='female', age='1', is_child=True)

child.is_18("Sarah")
child.family_presentation()


# #Exercise 2 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore we need to add the following keys to our dictionaries: power and incredible_name.

# Initial members data:

# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
# ]


# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.


# Add a method called incredible_presentation which :

# Prints the family’s last name and all the members’ first name (ie. use the super() function, to call the family_presentation method)
# Prints all the members’ incredible name and power.

# Call the incredible_presentation method.


# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.


# Call the incredible_presentation method again.



class TheIncredibles(Family):

    def __init__(self, last_name):
        self.members = [
                        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
                        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
                    ]
        self.lastname = last_name
    
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if int(member['age']) > 18:
                    print(f"{member['power']}")
                else:
                    print(f"{member['name']} under 18 years old")

    def incredible_presentation(self):
        super().family_presentation()
        for member in self.members:
            print(f"{member['name']} : {member['power']}")



inc = TheIncredibles("Savin")
inc.use_power("Sarah")
inc.incredible_presentation()