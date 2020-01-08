const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body,
              {session} = req,
              db = req.app.get('db');
        
        let user = await db.auth.check_user({email});
        if(user){
            return res.status(400).send('Email already in use')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await db.auth.register_user({email, password: hash});
        session.user = createdUser;
        res.status(201).send(session.user);
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