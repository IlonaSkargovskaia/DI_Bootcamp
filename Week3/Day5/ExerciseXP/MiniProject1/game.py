#Mini-Project: Rock, Paper, Scissors
# Rock-paper-scissors is an old game that can be played between two people. You can read about it in wikipedia

# We will create a game for the user to play Rock-paper-scissors against the computer.

# The user will input his/her move (rock/paper/scissors),
# and the computer will select either rock, paper or scissors at random.
# We will then compare the user’s move with the computer’s move, and determine the results of the game:

# The user won

# The computer won (the user lost)
# A draw (tie)
# We will print the outcome of each game: the user’s choice, the computer’s choice, and the result.

# The user will be able to play again and again. Once the user decides to exit the program, we will print a summary of the outcomes of all the games: how many times they won, lost or and tied the computer.


import random

class Game:


    def set_user_item(self):
        self.user_choice = ["rock", "paper", "scissors"]
        self.user_answer  = None
        while  self.user_answer not in self.user_choice:
            self.user_answer = input("write your choice: 'rock', 'paper', 'scissors'? ")
        
        print(f"Your answer is {self.user_answer}")
        return self.user_answer
    
    def get_computer_item(self):
        self.comp_choice = ["rock", "paper", "scissors"]
        print(random.choice(self.comp_choice))
        return random.choice(self.comp_choice)
           
       
           

play = Game()
#play.set_user_item()
#play.get_computer_item()