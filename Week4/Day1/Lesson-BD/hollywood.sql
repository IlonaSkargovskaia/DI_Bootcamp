-- CREATE TABLE actor (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	date_birth DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL DEFAULT 0
-- )

-- получить все колонки
-- SELECT * FROM actor

-- получить определенные колонки
-- SELECT first_name, last_name FROM actor

-- заполняем поля
-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES('Georges', 'Cloney', '1976-03-12', 2)

-- множественные поля
-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES
-- ('Brad', 'Pitt', '1980-04-22', 1),
-- ('Matt', 'Damon', '1982-11-22', 2)

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES('Angelina', 'Jolie', '1975-06-04', 2)

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES('Sandra', 'Bullock', '1964-06-26', 2)


-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES
-- ('Jenifer', 'Aniston', '1982-04-22', 1),
-- ('Megan', 'Fox', '1986-05-07', DEFAULT),
-- ('Cameron', 'Diaz', '1972-08-30', 2)

-- SELECT first_name, last_name FROM actor

-- выбрать только актера чье имя Анджелина
-- SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina'

-- выбрать только актера чье имя Анджелина или фамилия Клуни
-- SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina' OR last_name = 'Cloney'
-- если ничего не найдено - пустая таблица
-- SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina' AND last_name = 'Cloney'

-- SELECT first_name, last_name FROM actor WHERE number_oscars >= 2

-- упорядочить по алфавитному порядку фамилии
-- SELECT * FROM actor ORDER BY last_name ASC

-- если одинаковые фамилии - тогда в обратном алфавитном порядке сортируем по имени
-- SELECT * FROM actor ORDER BY last_name ASC, first_name DESC

-- найти 1 самого старого актера
-- SELECT * FROM actor ORDER BY date_birth ASC LIMIT 1

-- если нужно выбрать только от какого-то года используем метод extract(YEAR from ...)
-- SELECT * FROM actor WHERE EXTRACT(YEAR from date_birth) >= 1980

-- если нужно выбрать тех у кого в имени есть а, если нужно А - это другая буква
-- SELECT * FROM actor WHERE first_name LIKE '%a%'

-- без учета регистра
-- SELECT * FROM actor WHERE first_name ILIKE '%a%'

-- изменить фамилию клуни, добавить О и показать что получилось
-- если не будем указывать where - изменения применятся ко всем полям
-- UPDATE actor
-- SET last_name = 'Clooney'
-- WHERE actor_id = 1
-- RETURNING *


-- SELECT * FROM actor ORDER BY actor_id

-- DELETE FROM actor
-- WHERE actor_id = 5

-- INSERT INTO actor (first_name, last_name, date_birth, number_oscars)
-- VALUES('Emma', 'Bullock', '1980-04-26', 2)

-- если нужно изменить структуру таблицы

-- добавить новую колонку
-- ALTER TABLE actor ADD COLUMN salary INTEGER;
-- ALTER TABLE actor ADD COLUMN nationallity VARCHAR(200);

-- SELECT * FROM actor

-- добавить ЗП ко всем ЗП
-- UPDATE actor
-- SET salary = 1000000 * number_oscars
-- RETURNING *

-- UPDATE actor
-- SET nationallity = 'American'
-- WHERE actor_id IN (9,11,12)
-- RETURNING *

-- UPDATE actor
-- SET nationallity = 'French'
-- WHERE actor_id NOT IN (9,11,12)
-- RETURNING *

-- UPDATE actor
-- SET nationallity = 'Chinese'
-- WHERE actor_id BETWEEN 1 AND 3
-- RETURNING *

-- first 4 actors
-- SELECT * FROM actor LIMIT 4

-- упорядочить по алфавитному порядку фамилии
-- SELECT * FROM actor ORDER BY last_name DESC


-- без учета регистра
-- SELECT * FROM actor WHERE first_name ILIKE '%e%'

--5 oscars
-- UPDATE actor
-- SET number_oscars = 5
-- WHERE actor_id IN (9,11,12)
-- RETURNING *

-- more than 5 oscars
-- SELECT * FROM actor WHERE number_oscars >= 5




-- SELECT * FROM actor

-- Update the first name of Matt Damon to "Maty"
-- UPDATE actor
-- SET first_name = 'Maty'
-- WHERE first_name = 'Matt'
-- RETURNING *

-- Update the number of oscars of George Clooney to 4, and return the updated record
-- UPDATE actor
-- SET number_oscars = 4
-- WHERE first_name = 'Georges' AND last_name = 'Cloney'
-- RETURNING *

-- Rename the 'age' column by 'birthdate'
-- ALTER TABLE actor RENAME COLUMN date_birth TO birthdate


-- Delete one actor and return it
DELETE FROM actor
WHERE actor_id = 9
RETURNING *








