-- CREATE TABLE movie (
--     movie_id SERIAL PRIMARY KEY, 
--     movie_title VARCHAR (50) NOT NULL, 
--     movie_story TEXT, 
--     actor_playing_id INTEGER REFERENCES actor (actor_id)
-- )

-- SELECT * FROM movie
-- SELECT * FROM actor
-- INSERT INTO movie (movie_title, movie_story,actor_playing_id) 
-- VALUES('Gravity','Gravity is a 2013 science fiction thriller',
--       (SELECT actor_id FROM actor 
-- 	   WHERE first_name='Georges' AND last_name='Cloney'));

-- INSERT INTO movie (movie_title, movie_story,actor_playing_id)
-- VALUES('Oceans Eleven',
--        'Danny Ocean, wants to pull off the crime of the century, by ripping off three Casinos at the same time,',
--        (SELECT actor_id FROM actor 
-- 		WHERE first_name='Georges' AND last_name='Cloney'));

-- INSERT INTO movie (movie_title, movie_story)
-- VALUES('HarryPotter',
--        'Bla Bla');

-- INSERT INTO movie (movie_title, movie_story, actor_playing_id)
-- VALUES('Beauty and the Beast',
--        'Bla Bla',
--       (SELECT actor_id FROM actor 
-- 	   WHERE first_name='Maty' AND last_name='Damon'));


-- FIND ALL THE MOVIES WHERE CLOONEY PLAYS
-- SELECT first_name, last_name, movie_title
-- FROM actor
-- INNER JOIN movie ON actor.actor_id = movie.actor_playing_id
-- WHERE last_name = 'Cloney'



-- find the lastname and the movie title
-- movie title must contain the word "beauty"

-- SELECT actor.last_name, movie.movie_title
-- FROM actor
-- INNER JOIN movie ON actor.actor_id = movie.actor_playing_id
-- WHERE movie_title ILIKE '%beauty%'



-- ПОКАЗАТЬ ВСЕ ПЕРЕСЕКАЮЩИЕСЯ СТРОКИ INNER JOIN
-- SELECT last_name, movie_title
-- FROM actor
-- INNER JOIN movie ON actor_id = actor_playing_id


-- show everything from actor and only what is common from movie LEFT
-- SELECT first_name, last_name, movie_title
-- FROM actor
-- LEFT JOIN movie ON actor_id = actor_playing_id



-- show everything from movie and only what is common from actor RIGHT
-- SELECT first_name, last_name, movie_title
-- FROM actor
-- RIGHT JOIN movie ON actor_id = actor_playing_id





