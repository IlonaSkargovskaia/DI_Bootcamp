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