console.log('Sanity Check: JS is working!');


$(document).ready(() => {

});

function createNewBook(title, author, image, releaseDate, version) {
  insertNewBook();
}

function createNewPokemon(name, pokedexNum, evolvesFrom, image) {
  insertNewPokemon();
}

function createNewAlbum(artistName, name, releaseDate, version, genres) {
  insertNewAlbum();
}

module.exports = {
  createNewBook,
  createNewPokemon,
  createNewAlbum,
};
