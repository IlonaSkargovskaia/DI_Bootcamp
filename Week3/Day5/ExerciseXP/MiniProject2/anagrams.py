from anagram_checker import AnagramChecker

def user_menu():
    print("Menu:\nInput 'word' (w) or 'exit'(q)")
    return input("Choose one option: ")



def menu():
    #check the user answer
    answer = False
    while not answer:
        user_choice = user_menu().lower()
        if user_choice in "qw":
            answer = True
        else:
            answer = False
    # if user checked w - call class
    if user_choice == "w":
        anagr = AnagramChecker()
        #check for valid word from Anagram file
        anagr.is_valid_word(input("Write word, please: "))
        new_anagr = ' '.join(anagr.get_anagrams()).lower()
        print(f"YOUR WORD: '{anagr.word}'")
        print("This is a valid English word")
        print(f"Anagrams for your word: {new_anagr}")
        

menu()