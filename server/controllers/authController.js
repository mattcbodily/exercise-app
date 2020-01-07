const bcrypt = require('bcryptjs');

module.exports = {
    register: (req, res) => {
        const {email, password} = req.body,
              {session} = req,
              db = req.app.get('db');

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