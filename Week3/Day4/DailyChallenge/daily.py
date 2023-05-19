
import collections
import string

class Text:

    def __init__(self, string):
        self.sentence = string

    def amount_word(self, word):
        #deleting "." from end of the sentence
        self.sentence = self.sentence.replace(".", " ").lower()
        self.amount = self.sentence.count(word)
        
        if self.amount == 0:
            return None
        else:
            print(f"The {word} was found {self.amount} times")
    
    def max_common(self):
        #max count of word
        max_word_list = self.sentence.split(' ') #['A', 'good', 'book', 'would', 'sometimes', 'cost', 'as', 'much', 'as', 'a', 'good', 'house']
        counter = collections.Counter(max_word_list)
        #{'good': 2, 'as': 2, 'A': 1, 'book': 1, 'would': 1, 'sometimes': 1, 'cost': 1, 'much': 1, 'a': 1, 'house': 1}
        most_common = counter.most_common()[0] #first max occurance
        print(most_common)

    def unique_words(self):
        unique_words = []
        unique_word_list = self.sentence.split(' ')
        counter = collections.Counter(unique_word_list)
        for key, value in counter.items():
            if value == 1 :
                unique_words.append(key)
        print(unique_words)
        return unique_words


    @classmethod #cls = to THIS class
    def text_from_file(cls, file):
        with open(file, 'r') as story:
            all_story = story.read()
            print(all_story)
            return cls(all_story) #this class, чтобы не обращаться к основному




text = Text("A good book would good good sometimes cost as much as a good house.")
# text.amount_word("good")
text.max_common()
# text.unique_words()

# text_file = Text.text_from_file("Week3/Day4/DailyChallenge/the_stranger.txt")



#Bonus
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

import nltk
nltk.download('stopwords')
# from nltk.corpus import stopwords

import string
import nltk 

from nltk.corpus import stopwords

class TextModification(Text) :

    def without_punctuation(self) :
        result = list(string.punctuation)
        for char in self.sentence :
            if char in result :
                self.sentence = self.sentence.replace(char, "")
        return self.sentence
    
    def without_stop_words(self) :
        stops = set(stopwords.words('english'))
        lst_sentence = self.sentence.lower().split()
        final = ""
        for char in lst_sentence :
            if char not in stops :
                final += char + " "
                self.sentence = final.strip()
        return self.sentence


t1 = TextModification("A good book, would sometimes -cost as much as a good #house.")
print(t1.without_punctuation())
print(t1.without_stop_words())