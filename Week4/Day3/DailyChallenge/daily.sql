-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)


-- CREATE TABLE customer(
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50),
-- 	last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customer_profile(
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIN BOOLEAN DEFAULT FALSE,
-- 	customer_id INTEGER REFERENCES customer(id)
-- )

-- INSERT INTO customer(first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')


-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in
-- INSERT INTO customer_profile(isLoggedIN, customer_id)
-- VALUES
-- 	(TRUE, (SELECT id FROM customer WHERE first_name = 'John'))
	
-- INSERT INTO customer_profile(isLoggedIN, customer_id)
-- VALUES
-- 	(FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'))

-- SELECT * FROM customer_profile

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
-- All the customers first_name and isLoggedIn columns - 
-- even the customers those who don’t have a profile.
-- The number of customers that are not LoggedIn

-- SELECT first_name
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer.id = customer_profile.customer_id
-- WHERE isLoggedIN = TRUE


-- SELECT customer.first_name, customer_profile.isLoggedIn
-- FROM customer
-- LEFT JOIN customer_profile
-- ON customer.id = customer_profile.customer_id


-- SELECT COUNT(*)
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer.id = customer_profile.customer_id
-- WHERE isLoggedIN = FALSE







