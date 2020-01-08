const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body,
              {session} = req,
              db = req.app.get('db');
        
        let user = await db.auth.check_user({email});
        if(user[0]){
            return res.status(400).send('Email already in use')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await db.auth.register_user({email, password: hash});
        session.user = createdUser[0];
        res.status(201).send(session.user);
    },
    login: async(req, res) => {
        const {email, password} = req.body,
        {session} = req,
        db = req.app.get('db');

        let user = await db.auth.check_user({email});
        if(!user[0]){
            return res.status(400).send('Email is incorrect');
        }

        const authorized = bcrypt.compareSync(password, user[0].password);
        if(!authorized){
            return res.status(400).send('Password is incorrect');
        }

        delete user[0].password
        session.user = user[0];
        res.status(202).send(session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send('No user logged in')
        }
    }
}