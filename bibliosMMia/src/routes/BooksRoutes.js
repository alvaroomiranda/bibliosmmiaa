const express = require('express');
const BooksController = require('../controllers/BooksController');

const router = express.Router();

router.post('/books', BooksController.createBook);
router.post('/books/update/:id', BooksController.updateBook);
router.get('/', BooksController.findBooks);
router.get('/books/:id', BooksController.findBook);
router.post('/books/delete/:id', BooksController.deleteBook);

module.exports = router;
