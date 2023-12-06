const Book = require('../models/Book');

module.exports = {
  async createBook(request, response) {
    const { title, author, editor_book, category } = request.body;

    const book = await Book.create({ title,author, editor_book, category });

    response.redirect('/');
  },

  async findBooks(request, response) {
    const books = await Book.findAll({ raw: true });

    return response.json(books);
  },

  async findBook(request, response) {
    const { id } = request.params;
    const books = await Book.findByPk(id);

    return response.json(books);
  },

  async updateBook(request, response) {
    const { id } = request.params;
    const { title, author, editor_book, category } = request.body;

    const book = await Book.update(
      { title, author, editor_book, category },
      { where: { id: id } }
      );
      return response.redirect(`/books/update/${id}`); 
    },

  async deleteBook(request, response) {
    const { id } = request.params;
    const book = await Book.destroy({ where: { id: id } });
    return response.redirect('/allBooks');
  },
};
