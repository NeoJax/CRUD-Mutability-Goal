console.log('Sanity Check: JS is working!');


$(document).ready(() => {

});

function createNewBook(title, author, image, releaseDate, version) {
  const book = new bookSchema();
}

function createNewPokemon(name, pokedexNum, evolvesFrom, image) {

}

function createNewAlbum(artistName, name, releaseDate, version, genres) {

}

module.exports = {
  createNewBook,
  createNewPokemon,
  createNewAlbum,
};
