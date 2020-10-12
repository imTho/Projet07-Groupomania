const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../database_connect");
const userQuery = require('../models/user');

//Inscription
exports.signup = (req, res, next) => {
    //Cryptage Email
    const buffer = Buffer.from(req.body.email);
    const cryptedEmail = buffer.toString('base64');
    //Cryptage du MDP
    bcrypt.hash(req.body.password, 10)
        .then(cryptedPassword => {
            //Ajout à la BDD
            db.query(`INSERT INTO users VALUES (NULL, '${req.body.nom}', '${req.body.prenom}', '${cryptedPassword}', '${cryptedEmail}', 0)`,
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
        })
        .catch(error => res.status(500).json({
            error
        }));
};

//Connexion
exports.login = (req, res, next) => {
    const buffer = Buffer.from(req.body.email);
    const cryptedEmail = buffer.toString('base64');
    //Recherche de l'utilisateur dans la BDD
    db.query(`SELECT * FROM users WHERE email='${cryptedEmail}'`,
        (err, results, rows) => {
            //Si utilisateur trouvé : 
            if (results.length > 0) {
                //Verification du MDP
                bcrypt.compare(req.body.password, results[0].password)
                    .then(valid => {
                        //Si MDP invalide erreur
                        if (!valid) {
                            res.status(401).json({
                                message: 'Mot de passe incorrect.'
                            });
                            //Si MDP valide création d'un token
                        } else {
                            res.status(200).json({
                                userId: results[0].id,
                                nom: results[0].nom,
                                prenom: results[0].prenom,
                                admin: results[0].admin,
                                token: jwt.sign({
                                    userId: results[0].id
                                }, 'SECRET_TOKEN', {
                                    expiresIn: '24h'
                                })
                            });
                        }
                    });
            } else if (err) {
                console.log(err);
                return res.status(400).json("erreur");
            }
        }
    );
};