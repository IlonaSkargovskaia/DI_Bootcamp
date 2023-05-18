
import collections
import string

class Text:

    def __init__(self, string):
        self.sentence = string
        #каждый раз при создании объекта мы будем вызывать метод подсчета кол-ва слов
        #self.frequencies_word = self.frequencies()

    def amount_word(self, word):
        #deleting "." from end of the sentence
        self.sentence = self.sentence.replace(".", " ").lower()
        self.amount = self.sentence.count(word)
        
        if self.amount == 0:
            return None
        else:
            print(f"The {word} was found {self.amount} times")
    
    def frequencies(self):
        #max count of word
        max_word_list = self.sentence.split(' ') #['A', 'good', 'book', 'would', 'sometimes', 'cost', 'as', 'much', 'as', 'a', 'good', 'house']
        counter = collections.Counter(max_word_list)
        #{'good': 2, 'as': 2, 'A': 1, 'book': 1, 'would': 1, 'sometimes': 1, 'cost': 1, 'much': 1, 'a': 1, 'house': 1}
        most_common = counter.most_common()[0] #first max occurance
        print(most_common)


    @classmethod #cls = to THIS class
    def text_from_file(cls, file):
        with open(file, 'r') as story:
            all_story = story.read()
        print(all_story)
        return cls(all_story) #this class, чтобы не обращаться к основному


# class TextModification(Text):

#     def del_punct(self):
        
#         for punc in string.punctuation:
#             if punc in self.str:
#                 print(punc)



text = Text("A good book would good good sometimes cost as much as a good house.")
text.amount_word("good")
text.frequencies()

text_file = Text.text_from_file("Week3/Day4/DailyChallenge/the_stranger.txt")


