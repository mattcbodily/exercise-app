module.exports = {
    getWorkouts: (req, res) => {
        console.log('hit', req.params)
        const {id} = req.params,
              db = req.app.get('db');
        
        db.workout.get_all_workouts({id})
        .then(workouts => res.status(200).send(workouts))
        .catch(err => res.status(500).send(err))
    },
    postWorkout: (req, res) => {
        const {id, workoutType, workoutTime, workoutDistance, workoutDate} = req.body,
              db = req.app.get('db');
        
        db.workout.post_workout({id, workoutType, workoutTime: +workoutTime, workoutDistance: +workoutDistance, workoutDate})
        .then(res => res.sendStatus(201))
        .catch(err => res.status(500).send(err))
    }
}