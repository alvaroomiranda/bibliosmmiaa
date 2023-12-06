const express = require('express');
const UsersController = require('../controllers/UsersController');

const router = express.Router();

router.post('/users', UsersController.Usercreate);
router.get('/login', UsersController.loginRender);
router.get('/users/:id', UsersController.findUser);
router.delete('/users/:id', UsersController.userDelete);
router.get('/', UsersController.homeRender);
router.get('/registerBook', UsersController.pageRegisterBook);
router.get('/allBooks', UsersController.allBooksrender);
router.put('/users/:id', UsersController.update);

module.exports = router;
