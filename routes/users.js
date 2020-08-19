const router = require('express').Router();
const { getUsers, createUser, getUser } = require('../controllers/users');

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

module.exports = router;
