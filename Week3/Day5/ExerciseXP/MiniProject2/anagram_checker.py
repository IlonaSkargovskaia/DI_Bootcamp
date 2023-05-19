#Anagram Checker
# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.

class AnagramChecker:

    def __init__(self):
        with open("Week3/Day5/ExerciseXP/MiniProject2/sowpods.txt", "r") as file:
                    print(file.read())

    def is_valid_word(self):
        user_word = input("Write any word: ").upper()
        eng_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        new_user_word = ''
        for letter in user_word:
            if letter in eng_alphabet:
                new_user_word += letter
            else:
                print("Try again, your word is invalid")
        print(new_user_word)


word = AnagramChecker()
word.is_valid_word()