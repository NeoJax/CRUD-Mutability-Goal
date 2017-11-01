DROP DATABASE IF EXISTS mutably;
CREATE DATABASE mutably;

\c mutably;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  image VARCHAR(255),
  releaseDate VARCHAR(255),
  __v INTEGER
);

CREATE TABLE pokemon (
  name VARCHAR(255),
  pokedex INTEGER,
  evolves_from VARCHAR(255),
  image VARCHAR(255)
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  artistName VARCHAR(255),
  name VARCHAR(255),
  releaseDate VARCHAR(255),
  __v INTEGER,
  genres VARCHAR(255) ARRAY
);
