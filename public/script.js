console.log('Sanity Check: JS is working!');

$(document).ready(() => {
  if ($('.panel-heading').html() === 'Books') {
    grabBooks();
  } else if ($('.panel-heading').html() === 'Pokemon') {
    grabPokemon();
  } else if ($('.panel-heading').html() === 'Albums') {
    grabAlbums();
  }
  $(document).on('click', '.edit', function () {
    console.log(this.parentNode.firstChild.nextSibling);
  });
});

function grabBooks() {
  fetch('http://mutably.herokuapp.com/books', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    data.books.forEach((element) => {
      $('.list-group').append(`<div><button class="edit">edit</button>${element.title}
      <button class="delete">delete</button></div><br><br>`);
    });
  });
}

function grabPokemon() {
  fetch('http://mutably.herokuapp.com/pokemon', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    data.pokemon.forEach((element) => {
      $('.list-group').append(`<button class="edit">edit</button>${element.name}, ${element.pokedex}
      <button class="delete">delete</button><br><br>`);
    });
  });
}

function grabAlbums() {
  fetch('http://mutably.herokuapp.com/albums', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    data.albums.forEach((element) => {
      $('.list-group').append(`<button class="edit">edit</button>${element.artistName}, ${element.name}, ${element.genres}
      <button class="delete">delete</button><br><br>`);
    });
  });
}
