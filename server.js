const express = require('express');
const ejs = require('ejs');
const {
  createNewBook,
  createNewPokemon,
  createNewAlbum,
} = require('./public/script.js');

const app = express();

app.use(express.static('public'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('base');
});

app.get('/books', (request, response) => {
  response.render('books');
});

app.post('/books', (request, response) => {
  createNewBook();
  response.render('books');
});

app.get('/pokemon', (request, response) => {
  response.render('pokemon');
});

app.post('/pokemon', (request, response) => {
  createNewPokemon();
  response.render('pokemon');
});

app.get('/albums', (request, response) => {
  response.render('albums');
});

app.post('/albums', (request, response) => {
  createNewAlbum();
  response.render('albums');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
