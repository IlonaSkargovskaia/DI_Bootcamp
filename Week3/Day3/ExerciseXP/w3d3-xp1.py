#Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.

# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.

def my_abs(arg):
    ''' abs() returns absolute value'''
    print(abs(arg))

my_abs(-34)
print(my_abs.__doc__)


def my_int(x=0, base=10):
    
    ''' int() method takes two parameters:
        value - any numeric-string, bytes-like object or a number
        base [optional] - the number system that the value is currently in '''
    
    print(int(x))

my_int(123)
my_int(34.6)
my_int("123456", base = 2)
print(my_int.__doc__)


def my_input(arg):

    ''' The input() function allows user input '''
    print(input(arg))

my_input("How is it going?")
print(my_input.__doc__)