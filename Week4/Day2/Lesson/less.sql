-- Delete

-- - удаляет данные и не сбрасывает идентификатор таблицы.
-- - работает со словом FROM
-- - работает медленно, тк записывает и хранит все в памяти

-- Delete FROM Developers_Institute



-- Truncate

-- - сбрасывает идентификатор конкретной таблицы.
-- - со словом TABLE
-- - ничего не хранит в памяти - работает быстро

-- Truncate TABLE Developers_Institute


-- Арифметические операции

-- прибавить к каждой оценке студента 100
-- SELECT id, name, marks, marks + 100
--    AS "marks+50" FROM students;


-- сложение двух столбцов
-- SELECT id, name, marks, marks + id
--    AS "marks+id" FROM students;


-- - прибавить 10 к тем студентам чьи оценки больше 50
-- SELECT id, name, marks, marks +10
--    AS "cond_marks+10" FROM students where marks>50;

-- точно также можно умножать делить и вычитать




-- Agregate functions
-- вид функции, которая работает с несколькими строками запроса одновременно, возвращая один результат.

-- avg(expression) - среднее значение expression всех строк в группе.
-- count(expression) -  количество  для каждой группы строк, где expression не NULL
-- max(expression) -  максимальное значение expression в сгруппированных строках
-- min(expression) -  минимальное значение expression в сгруппированных строках
-- sum(expression) -  сумму значений expression в сгруппированных строках


-- AS
-- Псевдонимы SQL используются для присвоения таблице или столбцу в таблице временного имени .
-- Псевдонимы часто используются, чтобы сделать имена столбцов более читабельными.

-- Синтаксис столбца псевдонима
-- SELECT column_name AS alias_name
-- FROM table_name;

-- Синтаксис таблицы псевдонимов
-- SELECT column_name(s)
-- FROM table_name AS alias_name;

-- получить first_name и age с псевдонимами
-- SELECT first_name AS name_actor, age AS birth_date FROM actors;


-- DISTINCT - ВЫБРАТЬ строки с уникальными значениями (first_name, мы получим «Matt» один раз, даже если их несколько «Matt» в таблице.)
-- SELECT DISTINCT first_name FROM actors;


-- IN (NOT IN) - проверяем есть ли значение в списке значений
-- value IN (value1,value2,...)

-- Получите актеров, которых зовут Мэтт, Леа или Дэвис
-- SELECT * FROM actors WHERE first_name in ('Matt','Lea','Davis');



-- BETWEEN
-- Получить актеров, дата рождения которых находится между двумя датами
-- SELECT * FROM actors WHERE age between '1961-01-01' and '1962-01-01';


-- GROUP BY
-- связывания строк по критериям.

-- SELECT 
--    column_1, 
--    column_2,
--    aggregate_function(column_3)
-- FROM 
--    table_name
-- GROUP BY 
--    column_1,
--    column_2;

-- SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name;


