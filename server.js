const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/books', (request, response) => {
  response.render('books');
});

app.get('/pokemon', (request, response) => {
  response.render('pokemon');
});

app.get('/albums', (request, response) => {
  response.render('albums');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
