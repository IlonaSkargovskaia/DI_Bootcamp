# #dict

# my_dog = {
#     'name': 'Nikson',
#     'age': 4
# }

# print(f'My dog name is {my_dog["name"]}')

# print(my_dog.items())

# sample_dict = {
#     'class': {
#         'student': {
#             'name' : 'Mike',
#             'marks': {
#                 'physics':70,
#                 'history':80
#             }
#         }
#     }
# }

# sample_dict['class']['student']['marks']['history'] = 100
# sample_dict['class']['student']['marks']['math'] = 50

# print(sample_dict['class']['student']['marks']['math'])


names = ['Tom', 'Dick', 'Harry']
ages = [10, 20 ,30]


new_list = dict(zip(names, ages))
print(new_list)