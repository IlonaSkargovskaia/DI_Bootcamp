#ЛОВИТЬ ОШИБКИ

# try: 
#     first_num = int(input("first num")) #10
#     second_num = int(input("second num")) #ABC
#     print("hello")
#     number = first_num / second_num
# except:
#     print("an error occured")

# print("Goodbuy")


 #если пользователь даст не правильный тип данных кроме числа - ошибка Value Error
 # если пользователь даст 0 - ошибка ZeroDivisionError
# try:
#     first_num = int(input("first num ")) #10
#     second_num = int(input("second num ")) #ABC
#     print("hello")
#     number = first_num / second_num
# except ValueError as error:
#     print("you give me a wrong datatype")
#     print(error)

# except ZeroDivisionError as error2:
#     print("you give me a 0")
#     print(error2)

# else: #if no errors
#     print(f"The result of the divisiion is {number}")

# finally:
#     print("FINALLY")

#написать свою ошибку
#raise ValueError("You made a mistake")
#после нее ничего не происходит - стоп программы



# class BankAccount:
#     def __init__(self, amount, name):
#         self.amount = amount
#         self.name_holder = name

#     def withdraw(self, amount_to_withdraw):
#         try:
#             if amount_to_withdraw > self.amount:
#                 raise ValueError("You don;t have enough money")
#         except ValueError as error:
#             print(error) #printing the message from the exception from the shell
#         else:
#             print("Your withdraw is succesfull")

# b1 = BankAccount(1000, "John")
# b1.withdraw(2000)


def colorize(text,color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')

    try:
        if color not in colors:
            raise ValueError("This color isn't in tuple")
        if isinstance(text, str) == False:
            raise TypeError("you give me a wrong datatype")
    except TypeError as error:
        print("TYPE ERROR")
        print(error)
    except ValueError as error:
        print("VALUE ERROR")
        print(error)
    else:
        print(colors)

    print("End of function")


#colorize("hello", "cyan")
#colorize(123, "yellow")
#colorize("hello", "red")