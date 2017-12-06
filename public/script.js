/* eslint func-names: 0, no-undef: 0, no-console: 0 , no-loop-func: 0 , no-underscore-dangle: 0 */
console.log('Sanity Check: JS is working!');

function grabBooks() {
  $('.list-group').empty();
  fetch('http://mutably.herokuapp.com/books', {
    method: 'GET',
  }).then(resolve => resolve.json()).then((data) => {
    for (let i = 0; i < data.books.length; i++) {
      $('.list-group').append(`<div id=${data.books[i]._id} class="ui attached segment">
      <div id=edit${data.books[i]._id} style="display:none" class="ui input">
      <input type="text" name="title" class="editText editBar ui input" value="${data.books[i].title}">
      <button class="editSave editBar ui button primary basic">save</button></div>
      <button class="edit editBar ui button positive">edit</button>
      <span class="title title${data.books[i]._id}">${data.books[i].title}</span>
      <button class="delete editBar ui button negative">delete</button></div`);
      // if (i + 1 < data.books.length) {
      //   $('.list-group').append('</div><div class="ui section divider">');
      // }
    }
  });
}

function postBook(formData) {
  fetch('http://mutably.herokuapp.com/books/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: formData,
  }).then(() => {
    grabBooks();
  });
}

function grabBook(name) {
  for (let i = 0; i < $('.title').length; i++) {
    if ($('.title')[i].innerHTML === name) {
      fetch(`http://mutably.herokuapp.com/books/${$('.title')[i].parentNode.id}`, {
        method: 'GET',
      }).then(data => data.json())
        .then((element) => {
          $('.list-group').empty();
          $('.list-group').append(`<div id=${element._id}>
          <div id=edit${element._id} style="display:none" class="ui input">
          <input type="text" name="title" class="editText editBar ui input" value="${element.title}">
          <button class="editSave editBar ui button primary basic">save</button></div>
          <button class="edit ui button positive">edit</button>
          <span class="title title${element._id}">Title: ${element.title}</span>
          <button class="delete ui button negative">delete</button>
          <span class="author author${element._id}">Author: ${element.author}</span>
          <span class="releaseDate releaseDate${element._id}">Release Date: ${element.releaseDate}</span>
          <div class="ui medium bordered image image${element._id}"><img src="${element.image}"></div>
          </div>`);
        });
    }
  }
}

function updateBook(id, newData) {
  fetch(`http://mutably.herokuapp.com/books/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: newData,
  }).then(() => {
    $(`#edit${id}`).hide();
    $(`.title${id}`).show();
    grabBooks();
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
  if ($('.heading').html() === 'Books') {
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
    const newTitle = { title: $(this).prev().val() };
    updateBook(this.parentNode.parentNode.id, JSON.stringify(newTitle));
  });
  $(document).on('click', '.delete', function () {
    deleteBook(this.parentNode.id);
  });
  $(document).on('click', '.findBook', () => {
    grabBook($('#findTitle').val());
  });
  $('#newBookForm').on('submit', function (event) {
    event.preventDefault();
    let formData = $(this).serializeArray();
    formData = JSON.stringify({
      title: formData[0].value,
      author: formData[1].value,
      image: formData[2].value,
      releaseDate: formData[3].value,
    });
    postBook(formData);
  });
});
