/* eslint-disable no-unused-vars */

const Book = require('../models/Book');

module.exports = {
  async createBook(req, res) {
    const { title, author, editor_book, category } = req.body;

    const book = await Book.create({ title,author, editor_book, category });

    res.redirect('/');
  },

  async findBooks(req, res) {
    const books = await Book.findAll({ raw: true });

    return res.json(books);
  },

  async findBook(req, res) {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    return res.json(books);
  },

  async updateBook(req, res) {
    const { id } = req.params;
    const { title, author, editor_book, category } = req.body;

    const book = await Book.update(
      { title, author, editor_book, category },
      { where: { id: id } }
      );
      return res.redirect(`/books/update/${id}`); 
    },

  async deleteBook(request, response) {
    const { id } = request.params;
    const book = await Book.destroy({ where: { id: id } });
    return response.redirect('/allBooks');
  },
};
