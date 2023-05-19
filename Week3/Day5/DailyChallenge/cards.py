#Answer the following questions

# What is a class?
# What is an instance?
# What is encapsulation?
# What is abstraction?
# What is inheritance?
# What is multiple inheritance?
# What is polymorphism?
# What is method resolution order or MRO?

# print("1. Class - is like an object constructor, or a 'blueprint' for creating objects.")

# print("2. Instance is an individual object of a certain class")

# print("3. Encapsulation refers to the bundling of attributes and methods inside a single class")

# print("4. Abstraction is a process of handling complexity by hiding unnecessary information from the user")

# print("5. Inherintance allows us to define a class that inherits all the methods and properties from another class (Parent and child classes)")

# print("6. When a class is derived from more than one base class it is called multiple Inheritance. The derived class inherits all the features of the base case")

# print("7. polymorphism means having many forms. For example we have one name of function, which we use in different classes, but this function performs different things")

# print("8. It is the order in which a method is searched for in a classes hierarchy")


#The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.


import random

class Card:

    def __init__(self, suit, val):
        self.suit = suit
        self.value = val

    def show(self):
        print(f"{self.value} of {self.suit}")

class Deck:
    def __init__(self):
        self.cards = []
        self.build()

    def build(self):
        for s in ["Hearts", "Diamonds", "Clubs", "Spades"]:
            for v in range(1, 14):
                self.cards.append(Card(s, v))

    def show(self):
        for c in self.cards:
            c.show()

    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)
        # print(self.cards)


card = Card("Card", 6)
card.show()

deck = Deck()
deck.show()
deck.shuffle()
deck.show()