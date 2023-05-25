import requests
import psycopg2
import random

connection = psycopg2.connect(
    database= 'countries',
    user='postgres',
    password='root',
    host='localhost',
    port='5432'
)

cursor = connection.cursor()

cursor.execute("CREATE TABLE countries (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, capital VARCHAR(100) NOT NULL, flag_code VARCHAR(50) NOT NULL, subregion VARCHAR(200) NOT NULL, population BIGINT)")

connection.commit()

cursor.execute("DROP TABLE IF EXISTS countries")

for i in range(10):
    countries_api = requests.get('https://restcountries.com/v3.1/all')
    data = countries_api.json()

    name = data[i]['name']['common']
    capital = data[i]['capital'][0]
    flag_code = data[i]['flag']
    subregion = data[i]['subregion']
    population = data[i]['population']
    
    try:
        query = f'''INSERT INTO countries ({name}, {capital}, {flag_code}, {subregion}, {int(population)})'''
        cursor.execute(query)
        connection.commit()
    except:
        pass

print('done')



