class Game:

    def set_user_item(self):
        self.user_choice = ["rock", "paper", "scissors"]
        self.user_answer  = None
        while  self.user_answer not in self.user_choice:
            self.user_answer = input("write your choice: 'rock', 'paper', 'scissors'? ")
        
        print(f"Your answer is {self.user_answer}")
           
       
           

play = Game()
play.set_user_item()