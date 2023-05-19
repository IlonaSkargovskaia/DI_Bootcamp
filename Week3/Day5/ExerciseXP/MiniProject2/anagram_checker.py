#Anagram Checker
# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.

class AnagramChecker:

    def __init__(self):
        file = open("Week3/Day5/ExerciseXP/MiniProject2/sowpods.txt", "r")
        #want to create a list from given words file
        self.words_list = []
        for word in file.readlines():
            self.words_list.append(word.strip())
        print(self.words_list)

    def is_valid_word(self, word):
        self.word = word.upper()
        #if letter in given word is in eng alphabet - then true, else - False
        for letter in self.word:
            if letter.isalpha():
                True
            else:
                False
        #check if word in file
        if self.word in self.words_list:
            True
        else:
            False


    def get_anagrams(self):
        #devided to list given word from user
        self.letters = [letter for letter in self.word] 
        #['Z', 'R', 'L', 'G', 'K', 'E', 'R', 'L', 'G', 'E']
        self.anagram = []
        for word in self.words_list:
            if sorted(word) == sorted(self.word):
                self.anagram.append(word)
        #delete word which find from list
        self.anagram.remove(self.word)
        print(self.anagram)



word = AnagramChecker()
word.is_valid_word(input("Write any word: "))
word.get_anagrams()