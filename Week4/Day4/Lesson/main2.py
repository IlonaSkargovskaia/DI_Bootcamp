import psycopg2

def manage_connection(query):
#connect to DB
    try:
        connection = psycopg2.connect(
            database = "Hollywood",
            user = 'postgres',
            password = 'root',
            host = 'localhost',
            port = '5432'
        )

        with connection:
            with connection.cursor() as cursor: 
                cursor.execute(query)
                # result = cursor.fetchall()
                result = cursor.fetchone()
                return result
    except Exception as exception:
        print(f'ERROR: {exception}')
    finally:
        connection.close() #close connection


# def get_all_actors():
#     query_user = "SELECT * FROM actor WHERE first_name = 'Megan'"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f"The actor is {actor[1]}{actor[2]} He is {actor[-1]}")

# get_all_actors()

# def get_all_actors_salary(user_answer):
#     query_user = f"SELECT * FROM actor WHERE salary > {user_answer}"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f"The actor is {actor[1]}{actor[2]} He is {actor[-1]}")

# get_all_actors_salary(1000000)

def get_all_actors_lastname(lastname):
    query_user = f"SELECT * FROM actor WHERE last_name = '{lastname}' LIMIT 1"
    result = manage_connection(query_user)

    print(result)
    print(f"The actor is {result[1]}{result[2]} He is {result[-1]}")

get_all_actors_lastname('Cloney')



