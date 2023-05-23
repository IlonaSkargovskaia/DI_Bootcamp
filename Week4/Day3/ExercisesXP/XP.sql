-- Get a list of all film languages.
-- SELECT * FROM language

-- Get a list of all films joined with their languages – 
-- select the following details : film title, description, 
-- and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.

-- SELECT * FROM film

-- first part
-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id 

-- second part
-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id 


-- Create a new table called new_film with the 
-- following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film(
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	new_film_name VARCHAR(200)
-- )

-- INSERT INTO new_film(new_film_name)
-- VALUES('Do the Right Thing'),
-- ('Annie Hall')


-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.


-- CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY,
-- 	fk_film_id INTEGER NOT NULL REFERENCES new_film (new_film_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	fk_language_id INTEGER NOT NULL REFERENCES language (language_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	title VARCHAR(50),
-- 	score SMALLINT NOT NULL DEFAULT 1,
-- 	review_text TEXT,
-- 	last_update DATE
-- )

-- only for me (check)
-- SELECT * 
-- FROM customer_review
-- INNER JOIN new_film
-- ON new_film.new_film_id = customer_review.fk_film_id

-- SELECT * FROM new_film

-- INSERT INTO customer_review(fk_film_id, fk_language_id, title, score, review_text, last_update)
-- VALUES (4, 1, 'Annie Hall review', 10, 'is a long established fact that a reader will be distracted by the readable', '2023-05-20')

-- INSERT INTO customer_review(fk_film_id, fk_language_id, title, score, review_text, last_update)
-- VALUES (3, 1, 'Do the Right Thing review', 8, 'is a long established fact that a reader will be', '2020-03-20')


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film
-- WHERE new_film_id = 3

-- SELECT * FROM customer_review 
-- film was deleted, beacuse I set the DELETE function in foreign key to CASCADE



-- PART 2
-- UPDATE film
-- SET language_id = 2
-- WHERE title = 'Ace Goldfinger'

-- keys
-- SELECT * FROM information_schema.table_constraints WHERE table_name = 'customer';
-- as I see right - address_id is a foreign key for table address
-- when we insert to customer table we need to use address_id as unique


--3
-- DROP TABLE customer_review
-- this was easy step, because customer_review is a children from film


--4
-- SELECT COUNT(*) FROM rental
-- WHERE return_date IS null

--5
-- SELECT film_id, title, rental_rate FROM film
-- WHERE film_id IN (
-- 	SELECT film_id FROM inventory
-- 	WHERE inventory_id IN (
-- 		SELECT inventory_id FROM rental
-- 		WHERE return_date IS null)
-- 	)
-- ORDER BY rental_rate DESC LIMIT 30


--6 (we'll get film_id = 659)
-- SELECT * 
-- FROM film
-- INNER JOIN film_actor
-- ON film.film_id = film_actor.film_id
-- INNER JOIN actor
-- ON film_actor.actor_id = actor.actor_id
-- WHERE description ILIKE '%sumo%' AND first_name = 'Penelope' AND last_name = 'Monroe'


-- 6/2
-- SELECT * 
-- FROM film
-- INNER JOIN film_category 
-- ON film.film_id = film_category.film_id
-- INNER JOIN category 
-- ON film_category.category_id = category.category_id
-- WHERE length < 60 AND rating = 'R' AND category.name = 'Documentary'



-- 6/3
-- SELECT title 
-- FROM film
-- INNER JOIN inventory 
-- ON film.film_id = inventory.film_id
-- INNER JOIN rental 
-- ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN customer 
-- ON rental.customer_id = customer.customer_id
-- WHERE first_name = 'Matthew' AND last_name ='Mahan' 
-- AND rental_rate > 4 AND return_date BETWEEN '2005-07-28' AND '2005-08-01'



-- 6/4

SELECT * 
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental 
ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer 
ON rental.customer_id = customer.customer_id
WHERE first_name = 'Matthew' AND last_name ='Mahan' 
AND (title ILIKE '%boat%' OR description ILIKE '%boat%')
ORDER BY replacement_cost DESC LIMIT 1

-- film_id = 848




