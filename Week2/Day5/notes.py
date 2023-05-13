#list comprehension

other_way = list(range(1, 6))
print(other_way) #[1, 2, 3, 4, 5]

other_way_step = list(range(10, 80, 10))



# find duplicates in list

list_letters = ['a', 'b', 'b', 'd', 'f', 'f']

duplicates = list(set([item for item in list_letters if list_letters.count(item) > 1]))

print(duplicates)


#3
numbers = [10, 20 ,30 ,40, 50]
new_list = [number**2 for number in numbers ]

#4 - изменяем все слова и добавляем s
fruits = ["apple", "banana", "pear", "melon"]
plural_fruits = [fruit + "s" for fruit in fruits]
print(plural_fruits)


#LC for dictionary
words = {
    "happy" : "a mood",
    "sunny" : "the weather",
    "sun" : "the planet",
    "sunrise" : "the sun rising"
}

sun_words = {key:value for key, value in words.items() if "sun" in key or "sun" in value}
print(sun_words)




def check_even(*list) : # упаковываем в tuple и теперь сколько бы параметров я не передала в функцию - она будет работать
    print(list)

check_even(2, 4, 5, 7)
check_even(2, 4, 5)




#** - только если я передаю keywords arguments тогда никогда не будет ошибки при передаче разного количества аргументов

def loop_over_values(**person):
    print(person)

loop_over_values(name = "John", age = 12)
#{'name': 'John', 'age': 12}
loop_over_values(name = "John", age = 12, day = "Monday")
#{'name': 'John', 'age': 12, 'day': 'Monday'}




#Fibonacci sequence

num_terms = int(input("How many terms do you want?"))

n1, n2 = 0, 1
count = 0

if num_terms <= 0:
    print("Please, enter another integer >= 0")
elif num_terms == 1:
    print(f"Fibonacci sequence upto {n1} terms")
#generate fibonacci
else:
    print("Fibonacci sequence: ")
    while count < num_terms:
        print(n1)
        sum1 = n1 + n2
        #update values
        n1 = n2
        n2 = sum1
        count += 1

