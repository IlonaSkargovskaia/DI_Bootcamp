# import psycopg2
# #make connection

# connection = psycopg2.connect(
#     database="Hollywood", 
#     user='postgres',
#     password='root',
#     host='localhost', #or IP address
#     port='5432'
# )

# #3 open the cursor to start making transactions
# cursor = connection.cursor()

# #4 Make your queries
# query = "SELECT * FROM actor"
# cursor.execute(query)

# #5 If the query is a select - retrieve the data
# result = cursor.fetchall() # --> list of tuple
# result = cursor.fetchone() # --> one tuple

# # --> loop to display the data 

# #6 If the query is a INSERT, DELETE, UPDATE, CREATE, ALTER, DROP
# connection.commit() #saving the changes in the database

# #7 Close the cursor, and close the connection
# cursor.close()
# connection.close()


import psycopg2


#connect to DB

connection = psycopg2.connect(
    database = "Hollywood",
    user = 'postgres',
    password = 'root',
    host = 'localhost',
    port = '5432'
)

#Creating a cursor object
cursor = connection.cursor()

def get_all_actors():
    query = "SELECT * FROM actor"
    cursor.execute(query)
    result = cursor.fetchall()

    for actor in result:
        print(f"The actor is {actor[1]} {actor[2]} He is {actor[-1]}")

get_all_actors()

# def insert_actor(*info):

#     query_user = f"""
#     INSERT INTO actor (first_name, last_name, birthdate, number_oscars, salary)
#     VALUES {info}
#     """
#     cursor.execute(query_user)
#     connection.commit()
#     #result = manage_connection(query_user)
#     # print(result)
#     # print(f"The actor is {result[1]}{result[2]} He is {result[-1]}")

# def create_computer() :
#     query_user = f"""
#     CREATE TABLE computer (
#         id SERIAL PRIMARY KEY,
#         brand VARCHAR(100)
#     )
#     """
#     cursor.execute(query_user)
#     connection.commit()  

# create_computer()

# insert_actor("Jackie", "Chan", '1967-03-12', 2, 2000000)

cursor.close()
connection.close()