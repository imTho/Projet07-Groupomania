const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/post');

router.get('/getAllPost', auth, userCtrl.getAllPost);
router.post('/newPost', auth, userCtrl.newPost);
router.post('/getOnePost', auth, userCtrl.getOnePost);
router.post('/deleteOnePost', auth, userCtrl.deleteOnePost);
router.post('/modifyOnePost', auth, userCtrl.modifyOnePost);

module.exports = router;