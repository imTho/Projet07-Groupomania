const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/post');

router.get('/getAllPost', auth, userCtrl.getAllPost);
router.post('/newPost', auth, userCtrl.newPost);
router.post('/getOnePost', auth, userCtrl.getOnePost);

module.exports = router;