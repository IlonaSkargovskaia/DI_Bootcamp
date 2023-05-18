# # 🌟 Exercise 1 – Random Sentence Generator
# # Instructions
# # Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# # Hint : The generated sentences do not have to make sense.

# # Download this word list

# # Save it in your development directory.

# # Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# # Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# # use the words list to get your random words.
# # the amount of words should be the value of the length parameter.

# # Take the random words and create a sentence (using a python method), the sentence should be lower case.

# # Create a function called main which will:

# # Print a message explaining what the program does.

# # Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# # If the user inputs incorrect data, print an error message and end the program.
# # If the user inputs correct data, run your code.
# import random

# def get_words_from_file(file):

#     with open(file, 'r') as file:
#         # print(words.read()) #every word in one line
#         words_collection = []
#         for word in file.readlines():
#             words_collection.append(word.strip())
#         #print(words_collection)
#         return words_collection


# get_words_from_file("Week3/Day4/ExercisesXP/words.txt")

# def get_random_sentence(length):
#     sentence = []
#     words_for_sentence = get_words_from_file("Week3/Day4/ExercisesXP/words.txt")
#     for word in range(length):
#         sentence.append(random.choice(words_for_sentence).lower())
#     print(' '.join(sentence))

# get_random_sentence(5)


# def main():
#     print("My program asking user to input sentence length and give him sentence with random words of that length")
    
#     user_length = input("How long do you want to be the sentence? Write the number (2 - 20): ")

#     try:
#         user_length = int(user_length)
#         # if user_length != int:
#         #     raise TypeError("you give me a wrong datatype")
#     except TypeError as error:
#         print("TYPE ERROR")
#         print(error)
    
#     except ValueError as error:
#         print("Write please numbers between 2- 20")
#         print(error)
        
#     else:
#         get_random_sentence(user_length)

# main()


#🌟 Exercise 2: Working With JSON
# Instructions
# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""


# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.


import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

#convert string json to dict python
sample_py = json.loads(sampleJson)
salary = sample_py['company']['employee']['payable']['salary']
print(salary)
sample_py['company']['employee']['bday'] = '18/12/1991'
print(sample_py)

#write to json file
#indent - отступ в новом файле
with open("Week3/Day4/ExercisesXP/new.json", "w") as file:
    json.dump(sample_py, file, indent=4, sort_keys=True)

    



