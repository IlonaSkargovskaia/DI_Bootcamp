#Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.

# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.

# def my_abs(arg):
#     ''' abs() returns absolute value'''
#     print(abs(arg))

# my_abs(-34)
# print(my_abs.__doc__)


# def my_int(x=0, base=10):
    
#     ''' int() method takes two parameters:
#         value - any numeric-string, bytes-like object or a number
#         base [optional] - the number system that the value is currently in '''
    
#     print(int(x))

# my_int(123)
# my_int(34.6)
# my_int("123456", base = 2)
# print(my_int.__doc__)


# def my_input(arg):

#     ''' The input() function allows user input '''
#     print(input(arg))

# my_input("How is it going?")
# print(my_input.__doc__)


#🌟 Exercise 2: Currencies
# Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount


    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                print("TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            return self.amount + int(other) #if i add number

    def __str__(self):
        return f"{self.amount} {self.currency}s"
    
    def __int__(self):
        return int(self.amount)
    
    def __repr__(self):
        return f"{self.amount} {self.currency}s"
    

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                self.amount += other.amount
                return self
            else:
                print("TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            self.amount += other
            return self
        

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1 + c2) #15
print(c1 + c3) #error
print(str(c1)) #5 dollars
print(int(c1)) #5
print(repr(c1)) #5 dollars
print(c1 + 5) #10
c1 += 5
print(c1) #10 dollars
c1 += c2
print(c1) #20 dollars
c1 += c2
print(c1) #20 + 10 dollars = 30 dollars
