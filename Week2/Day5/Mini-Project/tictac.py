#create_board

#шаги:
# 1. нарисовать поле
# 2. создать смену игроков Х и О
# 3. Начинает игру Х, задаем вопрос: "Какую строку?" "какой столбец?"
# 4. например [1][0] - присваиваем сюда "Х"
# 5. начинает ход О..
# 6. Создать все варианты победы и затем проверять да или нет
# 7. 

place = [[" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]]

line0 = f"*********************"
line1 = f"*   {place[0][0]}  |  {place[0][1]}  |  {place[0][2]}   *"
line2 = f"*  --- | --- | ---  *"
line3 = f"*   {place[1][0]}  |  {place[1][1]}  |  {place[1][2]}   *"
line4 = f"*  --- | --- | ---  *"
line5 = f"*   {place[2][0]}  |  {place[2][1]}  |  {place[2][2]}   *"
line6 = f"*********************"


#start printing board
def display_board():
    print("Player 1: X  and  Player 2: O")
    print("TIC TAC TOE")
    print(line0)
    print(line1)
    print(line2)
    print(line3)
    print(line4)
    print(line5)
    print(line6)
display_board()

#change players
def change_players():
    turn = 0
    pl = "X"

    while True:
        #задаю вопросы по очереди
        #Player 1 turns
        if turn == 0:
            print("\nplayer 1 turn ...\n")
            row = int(input("Enter a row (1 - 3): ")) - 1
            col = int(input("Enter a column (1 - 3): ")) - 1
            
        #Player 2 turns
        if turn == 1:
            print("\nplayer 2 turn ...\n")
            row = int(input("Enter a row (1 - 3): ")) - 1
            col = int(input("Enter a column (1 - 3): ")) - 1
            
        #чередую ходы
        turn += 1
        print(turn)
        turn = turn % 2
        print(turn)

        #чередую игроков
        if pl == "X":
            pl = "O"
        else:
            pl = "X"
          
change_players()


#checking board if empty 

def is_place_empty(row, col):
    return place[row][col] == " "
is_place_empty()


