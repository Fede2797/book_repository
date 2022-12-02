const { Router } = require('express');
const { bookGet, 
    bookPost, 
    bookPut,
    bookDelete,
    bookGetOne } = require('../controller/books');

const router = new Router();

router.get('/', bookGet);

router.get('/:id', bookGetOne)

router.post('/', bookPost);

router.put('/:id', bookPut);

router.delete('/:id', bookDelete);

module.exports = router;