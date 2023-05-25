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
        connection.close() 