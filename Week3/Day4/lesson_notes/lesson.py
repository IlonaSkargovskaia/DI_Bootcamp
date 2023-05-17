# инкапсуляция

class BankAccount:
    def __init__(self, amount, name):
        self.__amount = amount
        self.name_account = name

    def deposit(self, new_amount):
        self.__amount += new_amount
        print(self.__amount)

    #get the value
    @property #создаем метод с таким же названием чтобы получить доступ
    def amount(self):
        return self.__amount
    
    #modify the value
    @amount.setter
    def amount(self, new_amount):
        self.__amount = new_amount

b1 = BankAccount(1000, "John")
# b1.deposit(500)
# print(b1.__amount) #'BankAccount' object has no attribute 'amount' - hidden attr
# b1.__amount = 1000000 #'BankAccount' object has no attribute 'amount' - hidden attr

print(b1.amount) #1000 - ONLY GET HIDDEN VALUE с помощью property мы получаем эту переменную и не указываем скобки

#using setter method
b1.amount = 10000
print(b1.amount)
