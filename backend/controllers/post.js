const db = require("../database_connect");

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