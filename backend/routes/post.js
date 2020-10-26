const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/post');

//Posts
router.get('/', auth, userCtrl.getAllPost);
router.post('/', auth, userCtrl.newPost);
router.get('/:id', auth, userCtrl.getOnePost);
router.delete('/:id', auth, userCtrl.deleteOnePost);
router.put('/:id', auth, userCtrl.modifyOnePost);
router.get('/user:id/posts', auth, userCtrl.getUserPosts);
//Commentaires
router.get('/:id/comments', auth, userCtrl.getAllComments);
router.post('/:id/comment/', auth, userCtrl.newComment);
router.delete('/comment/:id', auth, userCtrl.deleteComment);

module.exports = router;