const bcrypt = require('bcryptjs');

module.exports = {
    register: (req, res) => {

    },
    login: (req, res) => {

    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {

    }
}