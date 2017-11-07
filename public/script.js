/* eslint func-names: 0, no-undef: 0, no-console: 0 */
console.log('Sanity Check: JS is working!');

function grabBooks() {
  $('.list-group').empty();
  fetch('http://mutably.herokuapp.com/books', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    data.books.forEach((element) => {
      $('.list-group').append(`<div id=${element._id}>
      <div id=edit${element._id} style="display:none">
      <input type="text" name="title" class="editText editBar" value="${element.title}">
      <button class="editSave editBar">save</button></div>
      <button class="edit">edit</button>
      <span class="title title${element._id}">${element.title}</span>
      <button class="delete">delete</button></div><br><br>`);
    });
  });
}

function postBook(data) {
  fetch('http://mutably.herokuapp.com/books', {
    method: 'POST',
    body: data,
  }).then((element) => {
    console.log(element);
    grabBooks();
  });
}

function grabBook(name) {
  for (let i = 0; i < $('.title').length; i++) {
    if ($('.title')[i].innerHTML === name) {
      fetch(`http://mutably.herokuapp.com/books/${$('.title')[i].parentNode.id}`, {
        method: 'GET',
      }).then(data => data.json())
        .then(element => console.log(element));
    }
  }
}

function updateBook(id, newData) {
  fetch(`http://mutably.herokuapp.com/books/${id}`, {
    method: 'PUT',
    body: newData,
  }).then(() => {
    $(`#edit${id}`).hide();
    $(`.title${id}`).show();
  });
}

function deleteBook(id) {
  fetch(`http://mutably.herokuapp.com/books/${id}`, {
    method: 'DELETE',
  }).then(() => {
    grabBooks();
  });
}

function grabPokemon() {
  fetch('http://mutably.herokuapp.com/pokemon', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    data.pokemon.forEach((element) => {
      $('.list-group').append(`<button class="edit">edit</button>${element.name}
      <button class="delete">delete</button><br><br>`);
    });
  });
}

function grabAlbums() {
  fetch('http://mutably.herokuapp.com/albums', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    data.albums.forEach((element) => {
      $('.list-group').append(`<button class="edit">edit</button>${element.name}
      <button class="delete">delete</button><br><br>`);
    });
  });
}

$(document).ready(() => {
  if ($('.panel-heading').html() === 'Books') {
    grabBooks();
  } else if ($('.panel-heading').html() === 'Pokemon') {
    grabPokemon();
  } else if ($('.panel-heading').html() === 'Albums') {
    grabAlbums();
  }
  $(document).on('click', '.edit', function () {
    if ($(`#edit${this.parentNode.id}`).css('display') !== 'none') {
      $(`#edit${this.parentNode.id}`).hide();
      $(`.title${this.parentNode.id}`).show();
    } else {
      $(`#edit${this.parentNode.id}`).css('display', 'inline');
      $(`.title${this.parentNode.id}`).hide();
    }
  });
  $(document).on('click', '.editSave', function () {
    console.log($(this).prev().val());
    // let newTitle = $(this).prev().val();
    // updateBook(this.parentNode.parentNode.id, newData);
  });
  $(document).on('click', '.delete', function () {
    deleteBook(this.parentNode.id);
  });
  $(document).on('click', '.findBook', () => {
    grabBook($('#findTitle').val());
  });
  $(document).on('click', '.addBook', () => {
    console.log($(this.parentNode));
  });
  $('#newBookForm').on('submit', function (event) {
    event.preventDefault();
    const formData = $(this).serializeArray();
    const newBook = {};
    $(formData).each((index, element) => {
      newBook[element.name] = element.value;
    });
    postBook(formData);
  });
});
