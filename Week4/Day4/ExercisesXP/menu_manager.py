from menu_item import *

connection = psycopg2.connect(
    database="XPday4", 
    user='postgres',
    password='root',
    host='localhost', 
    port='5432'
)

cursor = connection.cursor()

class MenuManager:

    @classmethod
    def get_by_name(cls, get_item):
        query = f"SELECT * FROM menu_items WHERE item_name = '{get_item}'"
        cursor.execute(query)
        result = cursor.fetchall() 

        if result:
            return result
        else:
            print('No item {get_item} in menu_items')

    @classmethod
    def get_all(cls):
        query = f"SELECT * FROM menu_items"
        cursor.execute(query)
        result = cursor.fetchall() 
        return result


# item2 = MenuManager.get_by_name('Burger')
# print(item2)
# item = MenuManager.get_all()
# print(item)

