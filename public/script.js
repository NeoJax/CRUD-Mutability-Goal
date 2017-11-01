console.log('Sanity Check: JS is working!');

function createNewBook(title, author, image, releaseDate) {
  insertNewBook(title, author, image, releaseDate);
}

function createNewPokemon(name, pokedexNum, evolvesFrom, image) {
  insertNewPokemon(name, pokedexNum, evolvesFrom, image);
}

function createNewAlbum(artistName, name, releaseDate, genres) {
  insertNewAlbum(artistName, name, releaseDate, genres);
}

module.exports = {
  createNewBook,
  createNewPokemon,
  createNewAlbum,
};
