#I'm soorry, but I haven't time today to do this task, give me please more time
import collections

class Text:

    my_string = "A good book would sometimes cost as much as a good house."

    def __init__(self, string):
        self.str = string

    def amount_word(self, word):
        self.amount = self.str.count(word)
        print(self.amount) # count of words
        #max count of word
        max_word_list = self.str.split(' ') #['A', 'good', 'book', 'would', 'sometimes', 'cost', 'as', 'much', 'as', 'a', 'good', 'house']
        counter = collections.Counter(max_word_list)
        #{'good': 2, 'as': 2, 'A': 1, 'book': 1, 'would': 1, 'sometimes': 1, 'cost': 1, 'much': 1, 'a': 1, 'house': 1}
        most_common = counter.most_common()[0] #first max occurance
        print(most_common)
        


text = Text("A good book would good good sometimes cost as much as a good house")
text.amount_word("good")