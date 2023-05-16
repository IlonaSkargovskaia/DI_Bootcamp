#encapsulation - методы и переменные доступны только внутри класса

class Computer():

    def __init__(self):
        self.name = "Apple computer"
        self.__max_price = 900

    def sell(self):
        print(f"Selling price: {self.__max_price}")

    def __sell(self):
        print('This is private method')

    def set_max_price(self, price):
        self.__max_price = price

c = Computer()
c.sell() #Selling price: 900

#c.__sell() #'Computer' object has no attribute '__sell' = недоступен метод пользователю



#polymorphism - когда разные классы используют одинаковые названия функций (методов) но выполняются в каждом классе по-своему. Так как написано внутри функции



#import 

#1. import pizza - импорт всего класса или модуля
#2. from pizza import make_pizza - импорт ТОЛЬКО функции make_pizza
# 3. from pizza import make_pizza as mp - mp это alias (псевдоним если название функции сложное)

#абстракция - используется чтобы скрыть внутренние характеристики функции от пользователей
# например мы юзаем камеру телефона но не знаем что происходит внутри
# В Python абстракция используется, чтобы скрыть незначимые данные или класс, чтобы уменьшить сложность. Это также повышает эффективность приложения. 




#collections modules

# 1. defaultdict - не выдаст ошибку если ключа не существует
# 2. counter - считает кол-во вхождений значения

from collections import Counter
list = [1, 2, 3, 2, 4, 2, 2]
answer = Counter()
answer = Counter(list)
print(answer[2])

#3. deque - добавляет - удаляет значения в list
#4. namedtuple

from collections import namedtuple

Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.fname)  #Peter


# 5. ChainMap - объединяет множество словарей вместе и возвращает список словарей

import collections

dictionary1 = { 'a' : 1, 'b' : 2 }  
dictionary2 = { 'c' : 3, 'b' : 4 }  
chain_Map = collections.ChainMap(dictionary1, dictionary2)  
print(chain_Map.maps)   #[{'a': 1, 'b': 2}, {'c': 3, 'b': 4}]


# 6. OrderedDict - словарь, обеспечивающий поддержание своего порядка. Например, если ключи вставлены в определенном порядке, то этот порядок сохраняется. Даже если вы измените значение ключа позже, позиция останется прежней.


from collections import OrderedDict  

order = OrderedDict()  
order['a'] = 1  
order['b'] = 2  
order['c'] = 3  
print(order)   #[('a', 1), ('b', 2), ('c', 3)]

#unordered dictionary
unordered=dict()
unordered['a'] = 1  
unordered['b'] = 2  
unordered['c'] = 3 
print("Default dictionary", unordered) #{'a': 1, 'b': 2, 'c': 3}




