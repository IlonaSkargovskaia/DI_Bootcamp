-- I mixed up the names of the first and last names fields 
-- because in first part was "id, last_name, first_name" , and after that 
-- in table I saw other order, but I hope this is not critical.




-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR(100) NOT NULL,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- SELECT * FROM students
-- SET datestyle to DMY;

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980')

-- SELECT student_id, last_name,first_name, TO_CHAR(birth_date, 'DD/MM/YYYY') AS birth_date
-- FROM students

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES ('Ilona', 'Skargovskaya', '18/12/1991')


-- SELECT * FROM students

-- SELECT last_name, first_name FROM students 

-- SELECT last_name, first_name FROM students WHERE student_id = 2

-- SELECT last_name, first_name FROM students WHERE first_name = 'Benichou' AND last_name = 'Marc'

-- SELECT last_name, first_name FROM students WHERE first_name = 'Benichou' OR last_name = 'Marc'

-- SELECT last_name, first_name FROM students WHERE last_name LIKE '%a%'

-- SELECT last_name, first_name FROM students WHERE last_name ILIKE 'a%'

-- SELECT last_name, first_name FROM students WHERE last_name ILIKE '%a'

-- SELECT last_name, first_name FROM students WHERE last_name ILIKE '%a_'

-- SELECT last_name, first_name FROM students
-- WHERE student_id BETWEEN 1 AND 3

-- SELECT * FROM students WHERE birth_date >= '01/01//2000'




