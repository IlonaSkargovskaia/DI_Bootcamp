# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.


ask_num = int(input('Write a number: '))
ask_len = int(input('Write a length: '))
get_answer = [ask_num, ask_len]
# print(get_answer)

leng = get_answer[1] 
num = get_answer[0] 

new_list = [num]


for i in range(1, leng): #[7, 14, 21, 28, 35]
    new_list.append(new_list[i-1] + num)
    
print(new_list)


# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_str = input('Write the string with double letters: ') # lkiifkkd
new_s = ''
old_s = ''
for i in user_str:
    if len(new_s) == 0:
        new_s += i # '' + l = l
        old_s = i # l
    if i == old_s: # сравниваю с буквой в старой строке
        continue
    else:
        new_s += i # l + k / lk + i ...
        old_s = i # k / i /

print(new_s)