#create_board

#шаги:
# 1. нарисовать поле
# 2. создать смену игроков Х и О
# 3. Начинает игру Х, задаем вопрос: "Какую строку?" "какой столбец?"
# 4. например [1][0] - присваиваем сюда "Х"
# 5. начинает ход О..
# 6. Создать все варианты победы и затем проверять да или нет
# 7.

import numpy as np

def init_board():
    #массив с пустыми ячейками
    board = np.empty(shape=(3,3), dtype='object')
    for row in range(3):
        for col in range(3):
            board[row][col] = " "
    print(board)
    return board

board = init_board()

def draw_board():
    
    print(f"TIC TAC TOE")
    print(f"*********************")
    print(f"*   {board[0][0]}  |  {board[0][1]}  |  {board[0][2]}   *")
    print(f"*  --- | --- | ---  *")
    print(f"*   {board[1][0]}  |  {board[1][1]}  |  {board[1][2]}   *")
    print(f"*  --- | --- | ---  *")
    print(f"*   {board[2][0]}  |  {board[2][1]}  |  {board[2][2]}   *")
    print(f"*********************")

draw_board()