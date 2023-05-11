# numbers = [1,2,3,4,5]
# print(numbers)

other_way = list(range(1, 6))
print(other_way) #[1, 2, 3, 4, 5]


other_way_step = list(range(10, 80, 10))


#list comprehension

# number = [10, 20 ,30 ,40, 50]
# new_list = [number**2 for number in numbers ]


# fruits = ["apple", "banana", "pear", "melon"]
# plural_fruits = [fruit + "s" for fruit in fruits]
# print(plural_fruits)

words = {
    "happy" : "a mood",
    "sunny" : "the weather",
    "sun" : "the planet",
    "sunrise" : "the sun rising"
}

sun_words = {key:value for key, value in words.items() if "sun" in key or "sun" in value}
print(sun_words)



numbers = [1, 6, 8, 3, 5]

def check_even(*list) : # упаковываем в tuple и теперь сколько бы параметров я не передала в функцию - она будет работать
    print(list)

check_even(2, 4, 5, 7)
check_even(2, 4, 5)


#** - только если я передаю keywords arguments

def loop_over_values(**person):
    print(person)

loop_over_values(name = "John", age = 12)
#{'name': 'John', 'age': 12}
loop_over_values(name = "John", age = 12, day = "Monday")
#{'name': 'John', 'age': 12, 'day': 'Monday'}

