require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./controllers/authController'),
      workCtrl = require('./controllers/workoutController'),
      battleCtrl = require('./controllers/battleController'),
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected')
})

//auth endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.post('/api/logout', authCtrl.logout);
app.get('/api/user', authCtrl.getUser);

//workout endpoints
app.get('/api/workout/:id', workCtrl.getWorkouts);
app.post('/api/workout', workCtrl.postWorkout);

//battle endpoints
app.get('/api/battle/:id', battleCtrl.getUserBattles);
app.post('/api/battle', battleCtrl.createBattle);

const port = SERVER_PORT || 4040;
app.listen(port, () => console.log(`Exercise Gamified at ${port}`));