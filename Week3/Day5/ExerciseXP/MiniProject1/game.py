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

    def __init__(self):
         # "rock", "paper", "scissors" - "камень" / "бумага" / "ножницы"
         # бумага наркывает камень, ножницы режут бумагу, камень тупит ножницы
        self.choice = ["rock", "paper", "scissors"]

    def set_user_item(self):
        self.user_item  = None
        while  self.user_item not in self.choice:
            self.user_item= input("write your choice: 'rock', 'paper', 'scissors'? ")
        print(f"Your answer is {self.user_item}")
        return self.user_item
    
    def get_computer_item(self):
        self.computer_item = random.choice(self.choice)
        print(f"Computer answer is {self.computer_item}")
        return self.computer_item
    
    def get_game_result(self):
        
        if self.user_item == self.computer_item:
            print("It is draw")
        elif self.user_item == "rock":
            if self.computer_item == "scissors":
                print("You win!!!")
            else:
                print("Computer wins!")
        elif self.user_item == "paper":
            if self.computer_item == "rock":
                print("You win!!!")
            else:
                print("Computer wins!")
        elif self.user_item == "scissors":
            if self.computer_item == "paper":
                print("You win!!!")
            else:
                print("Computer wins!")
        

    def play(self):
        self.user_item = self.set_user_item()
        self.computer_item = self.get_computer_item()
        self.results = self.get_game_result()          
           

play = Game()
#play.set_user_item()
#play.get_computer_item()
play.play()