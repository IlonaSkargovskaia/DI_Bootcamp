#create_board

# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

def init_board():
    #массив с пустыми ячейками
    board = [[' ', ' ', ' '],
             [' ', ' ', ' '],
             [' ', ' ', ' ']]
    return board

board = init_board()

# print board for players
def draw_board():
    
    print(f"TIC TAC TOE")
    print(f"Player 1: 'X'   Player 2: 'O' ")
    print(f"*********************")
    print(f"*   {board[0][0]}  |  {board[0][1]}  |  {board[0][2]}   *")
    print(f"*  --- | --- | ---  *")
    print(f"*   {board[1][0]}  |  {board[1][1]}  |  {board[1][2]}   *")
    print(f"*  --- | --- | ---  *")
    print(f"*   {board[2][0]}  |  {board[2][1]}  |  {board[2][2]}   *")
    print(f"*********************")

draw_board()


#change board after than player turn
def update_board(row, col, player):
    board[row][col] = player

#проверяю пустое ли место
def is_place_empty(row, col):
    return board[row][col] == " "

#проверка победителя
def check_winner(player):
    #horizontal
    for row in range(3):
        if(board[row][0] == player and board[row][1] == player and board[row][2] == player):
            return True
    #vertical
    for col in range(3):
        if(board[0][col] == player and board[1][col] == player and board[2][col] == player):
            return True
    #left-diagonal
    if(board[0][0] == player and board[1][1] == player and board[2][2] == player):
        return True
    #right-diagonal
    if(board[0][2] == player and board[1][1] == player and board[2][0] == player):
        return True
    
#ничья
def check_dead_heat():
    for row in range(len(board)):
        for col in range(len(board)):
            if is_place_empty(row, col):
                return False
    return True



#structure game
turn = 0
game_over = False
player = "X"

#пока не конец игры
while not game_over:
    #спрашиваюю игроков по очереди
    if turn == 0:
        row = int(input("Player 1: enter row (1 - 3): ")) - 1
        col = int(input("Player 1: enter column (1 - 3): ")) - 1
    if turn == 1:
        row = int(input("Player 2: enter row (1-3): ")) - 1
        col = int(input("Player 2: enter column (1-3): ")) - 1

        while not is_place_empty(row, col):
            print("This place is busy. Choose another")
            if turn == 0:
                row = int(input("Player 1: enter row (1 - 3): ")) - 1
                col = int(input("Player 1: enter column (1 - 3): ")) - 1
            if turn == 1:
                row = int(input("Player 2: enter row (1-3): ")) - 1
                col = int(input("Player 2: enter column (1-3): ")) - 1
    
    update_board(row, col, player)
    draw_board()

#game over if conditions from check_winner is true
    if check_winner(player):
        game_over = True
        print(f"Player '{player}' is winner! Congratulations")

#check dead_heat
    if check_dead_heat():
        game_over = True
        print("Nobody won. you have a draw")

#which player turn
    turn += 1
    turn = turn % 2

#change players
    if player == "X":
        player = "O"
    else:
        player = "X"

