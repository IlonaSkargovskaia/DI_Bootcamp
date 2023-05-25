from menu_item import *
from menu_manager import *


def show_user_menu():
    choice = input(''' 
    View an Item (V)\n
    Add an Item (A)\n
    Delete an Item (D)\n
    Update an Item (U)\n
    Show the Menu (S)\n
    ''')

    if choice == 'v':
        pass
    elif choice == 'a':
        add_item_to_menu()
    elif choice == 'd':
        remove_item_from_menu()
    elif choice == 'u':
        update_item_from_menu()
    elif choice == 's':
        show_restaurant_menu()
    else:
        choice = input('Please a valid choice: ')
    


def add_item_to_menu():
    new_item_name = input("Enter item_name: ")
    new_item_price = input('Enter item price: ')
    item = MenuItem(new_item_name, new_item_price)
    new_item = item.save()
    return f'item {new_item.name}, {new_item.price} was added to the Menu'

def remove_item_from_menu():
    item_name_remove = input("enter name of item to remove: ")
    item = MenuItem(item_name_remove)
    removed_item = item.delete()
    return f'item {removed_item.name}, {removed_item.price} was deleted from the Menu'
def update_item_from_menu():
    pass
def show_restaurant_menu():
    pass