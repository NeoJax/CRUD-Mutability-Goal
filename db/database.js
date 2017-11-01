const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/mutably';
const db = pgp(connectionString);

function insertNewBook(title, author, image, releaseDate) {
  return db.one(`INSERT INTO books(title, author, image, releaseDate)
          VALUES($1, $2, $3, $4)`, [title, author, image, releaseDate]);
}

function insertNewPokemon(name, pokedexNum, evolvesFrom, image) {
  return db.one(`INSERT INTO pokemon(name, pokedexNum, evolvesFrom, image)
          VALUES($1, $2, $3, $4)`, [name, pokedexNum, evolvesFrom, image]);
}

function insertNewAlbum(artistName, name, releaseDate, genres) {
  return db.one(`INSERT INTO albums(artistName, name, releaseDate, genres)
          VALUES($1, $2, $3, $4)`, [artistName, name, releaseDate, genres]);
}

module.exports = {
  insertNewBook,
  insertNewPokemon,
  insertNewAlbum,
};
