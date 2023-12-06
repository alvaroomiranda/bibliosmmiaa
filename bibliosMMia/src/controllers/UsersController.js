const User = require('../models/User');
const Book = require('../models/Book');

module.exports = {
  async Usercreate(request, response) {
    const { name, email, password } = request.body;

    const user = await User.create({ name, email, password });

    return response.json(user);
  },
  async homeRender(request, response) {
    return response.render('home');
  },

  async findUser(request, response) {
    const { id } = request.params;
    const user = await User.findOne({ where: { id: id } });

    response.redirect('/');
  },
  loginRender(request, response) {
    response.render('login');
  },
  async allBooksrender(request, response) {
    const books = await Book.findAll({ raw: true });

    console.log(books);

    response.render('allBooks', { books });
  },
  async pageRegisterBook(request, response) {
    response.render('registerBook');
  },
  async update(request, response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const user = await User.update(
      { name, email, password },
      { where: { id }, },
    );
    return response.json({ message: 'Usuario atualizado!' });
  },

  async userDelete(request, response) {
    const { id } = request.params;
    const user = await User.destroy({ where: { id } });

    return response.json({ message: 'Usuario deletado!' });
  },
};
