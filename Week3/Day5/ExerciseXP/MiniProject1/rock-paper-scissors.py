import game as game

def get_user_menu_choice():
    print("\nMenu:\nPlay a new game - (p)\nShow scores - (s)\nQuit - (q)")
    return input("Choose one option: ")


def print_results(results):
    print(f"\nWins: {results['win']}\nLosses: {results['lose']}\nDraws: {results['draw']}\n")

results = {'win': 0, 'lose': 0, 'draw': 0}


def main():
    answer = False
    while not answer:
        user_choice = get_user_menu_choice().lower()
        if user_choice in "psq":
            answer = True
        else:
            answer = False
        
        if user_choice == 'p':
            print("Game start")
            start_game = game.Game()
            results[start_game.play()] += 1
            print_results(results)
            main()
        elif user_choice == 's':
            print_results(results)
            main()
        elif user_choice == 'q':
            pass

#get_user_menu_choice()
main()

