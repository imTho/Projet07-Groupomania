const db = require("../database_connect");
// All post
exports.getAllPost = (req, res, next) => {
    db.query('SELECT * FROM users INNER JOIN posts ON users.id = posts.userId ORDER BY date DESC', (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};
// NewPost
exports.newPost = (req, res, next) => {
    db.query(`INSERT INTO posts VALUES (NULL, '${req.body.userId}', '${req.body.title}', current_timestamp(), '${req.body.content}')`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(201).json({
            message: 'Votre post à été publié !'
        })
    });
};
// OnePost
exports.getOnePost = (req, res, next) => {
    db.query(`SELECT * FROM posts WHERE posts.id = ${req.body.postId}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};
// Delete OnePost
exports.deleteOnePost = (req, res, next) => {
    db.query(`DELETE FROM posts WHERE posts.id = ${req.body.postId}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};