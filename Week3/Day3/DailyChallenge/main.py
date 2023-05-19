#The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the circle and get something nice
# Be able to add two circles together
# Be able to compare two circles to see which is bigger
# Be able to compare two circles and see if there are equal
# Be able to put them in a list and sort them


class Circle:
    circles_list = []

    def __init__(self, name, radius = 0, diameter = 0):
        self.radius = float(radius)
        self.diameter = float(diameter)
        self.name = name
        Circle.circles_list.append(self)

    def __str__(self):
        sentence = f'{self.name} with radius {self.radius} and diameter {self.diameter}'
        return sentence

#Calculate the diameter getting the radius as arg
    @classmethod
    def from_radius(cls, name, radius):
        return cls(name = name, radius = radius, diameter = radius*2)

#Calculate the radius getting the diameter as arg
    @classmethod
    def from_diameter(cls, name, diameter):
        return cls(name = name, diameter = diameter, radius = diameter/2)
#calculate the area   
    def get_area(self) -> float:
        return 3.14 * self.radius ** 2
    
#add two circle areas   
    def __add__(self, other_circle) -> float:
        return self.get_area() + other_circle.get_area()
    
#function with other
    def __gt__(self, other_circle) :
        if self.get_area() > other_circle.get_area() :
            print(f'{self.name} is bigger than {other_circle.name}')
        elif other_circle.get_area() > self.get_area() :
            print(f'{other_circle.name} is bigger than {self.name}')


    def sort_circles(self) :
       sorted_circles = sorted(Circle.circles_list, key=lambda x: x.get_area())
       print(sorted_circles)
       return sorted_circles
    
    

circleA = Circle.from_diameter('circleA', diameter = 4)
circleB = Circle.from_radius('circleB', radius = 4)
circleC = Circle('circleC', 3,6)
circleA.get_area()

print("CircleA radius : ", circleA.radius, "CircleA diameter: ", circleA.diameter)
print("CircleB radius : ", circleB.radius, "CircleB diameter: ", circleB.diameter)
print("CircleC radius : ", circleC.radius, "CircleC diameter: ", circleC.diameter)
print("circleA.get_area : ", circleA.get_area())
print("circleB.get_area : ", circleB.get_area())

# adding Circles and rouding the float
print('add A and B: ', round(circleA + circleB, 2)) 

#greater than...
(circleC > circleB)
(circleA > circleB)

#sorting circles
for name in circleA.sort_circles():
    print(name)

