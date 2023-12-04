const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const path = require('path');
const port = 8080;
const app = express();

app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')));

const bodyParser = require('body-parser');

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const conn = require('./src/database/conn');

const User = require('./src/models/User');
const Book = require('./src/models/Book');

const UserRoutes = require('./src/routes/UsersRoutes');
const BooksRoutes = require('./src/routes/BooksRoutes');

app.use('/', UserRoutes);
app.use('/book', BooksRoutes);

conn
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
