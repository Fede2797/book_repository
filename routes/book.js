const { Router } = require('express');
const { bookGet, 
    bookPost, 
    bookPut } = require('../controller/books');

const router = new Router();

router.get('/', bookGet);

router.post('/', bookPost);

router.put('/[id]', bookPut);

module.exports = router;