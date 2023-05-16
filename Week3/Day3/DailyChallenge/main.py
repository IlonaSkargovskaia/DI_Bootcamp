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
    def __init__(self, radius = 0, diameter = 0):
        self.radius = float(radius)
        self.diameter = float(diameter)

#Calculate the diameter getting the radius as arg
    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius*2)

#Calculate the radius getting the diameter as arg
    @classmethod
    def from_diameter(cls, diameter):
        
        return cls(diameter = diameter, radius = diameter/2)
 #area   
    def get_area(self) -> float:
        return 3.14 * self.radius ** 2
    
#two areas   
    def __add__(self, other_circle) -> float:
        return self.get_area() + other_circle.get_area()

circleA = Circle.from_diameter(diameter = 4)
circleB = Circle.from_radius(radius = 4)
circleC = Circle(3,6)
circleA.get_area()

print("CircleA radius : ", circleA.radius, "CircleA diameter: ", circleA.diameter)
print("CircleB radius : ", circleB.radius, "CircleB diameter: ", circleB.diameter)
print("CircleC radius : ", circleC.radius, "CircleC diameter: ", circleC.diameter)
print("circleA.get_area : ", circleA.get_area())
print("circleB.get_area : ", circleB.get_area())
# adding Circles and rouding the float
print('add A and B: ', round(circleA + circleB, 2)) 


