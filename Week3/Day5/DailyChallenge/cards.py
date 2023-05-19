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
    # suit (Hearts, Diamonds, Clubs, Spades) 
    # value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

card_suits = ['hearts', 'diamonds', 'clubs', 'spades']
card_values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

class Deck:
    def __init__(self):
        self.cards_deck = []

    def shuffle(self):
        if len(self.cards_deck) == 52:
            random.shuffle(self.cards_deck)
        print(self.cards_deck)

#obj in class Deck
deck = Deck()

for suit in card_suits:
    for value in card_values:
        a = Card(suit, value)
        deck.cards_deck.append(a)

deck.shuffle()