const db = require("../database_connect");

exports.insertUser = (nom, prenom, password, email) => {
    db.query(`INSERT INTO users VALUES (NULL, '${nom}', '${prenom}', '${password}', '${email}')`,
        (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).json("erreur");
            }
            return res.status(201).json({
                message: 'Votre compte a bien été crée !'
            });
        }
    );
};

exports.selectUser = (email) => {
    db.query(`SELECT * FROM users WHERE email='${email}'`,
        (err, results, rows) => {
            if (err) throw err;
            return results;
        }
    );
};