# import json

# user = {
#     "firstName": "Jane",
#     "lastName": "Doe",
#     "hobbies": ["running", "sky diving", "singing"],
#     "age": 35,
#     "email" : None,
#     "children": [
#         {
#             "firstName": "Alice",
#             "age": 6,
#             "loves_school" : True
#         },
#         {
#             "firstName": "Bob",
#             "age": 8,
#             "loves_school" : False
#         }
#     ]
# }

# #convert dic to json-string
# my_json = json.dumps(user)
# print(my_json)

# #convert into python
# # person_str = '{"username": "John, "age": 25, "email": null}'
# # person_dict = json.loads(person_str)
# # print(person_dict)

# #pip install requests
# import requests

# response = requests.get('http://api.open-notify.org/iss-now.json')
# #print(dir(response))
# print(response.status_code)
# print(response.text)
# #info = json.loads(response.content)
# info = response.json()
# latitude = info["iss_position"]["latitude"]
# longitude = info["iss_position"]["longitude"]
# #print(info)

# sentence = f"The ISS is qt latitude {latitude} and longitude {longitude}"
# print(sentence)


# import requests
# response = requests.get("https://pokeapi.co/api/v2/pokemon/pikachu")
# #convert to python dict
# info = response.json()
# type_pikachu = info["types"][0]["type"]["name"]

 
# sentence = f"Pikachu is of type {type_pikachu}"
# print(sentence)


# import requests
# parameters = {"limit" : 2}
# response = requests.get("https://pokeapi.co/api/v2/pokemon", params=parameters)

# #convert to python dict
# info = response.json()
# print(info["results"])



# response = requests.get('http://api.open-notify.org/iss-now.json')
# #print(dir(response))
# print(response.status_code)
# print(response.text)
# #info = json.loads(response.content)
# info = response.json()
# latitude = info["iss_position"]["latitude"]
# longitude = info["iss_position"]["longitude"]
# #print(info)

import requests
import json

def add_data_iss():
    lst_response = []
    for i in range(10):
        response = requests.get('http://api.open-notify.org/iss-now.json')
        lst_response.append(response.json())
    print(lst_response)

#write to json file
#indent - отступ в новом файле
    with open("Week3/Day5/Lesson/iss_ino.json", "w") as file:
        json.dump(lst_response, file, indent=4, sort_keys=True)

add_data_iss()

#convert to dict and read
with open("Week3/Day5/Lesson/iss_ino.json", "r") as file:
    info = json.load(file)