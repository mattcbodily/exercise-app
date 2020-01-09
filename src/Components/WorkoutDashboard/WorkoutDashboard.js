import React, {useState, useEffect} from 'react';
import axios from 'axios';

const WorkoutDashboard = (props) => {
    const [user, setUser] = useState({})
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get('/api/user')
        .then((res) => {
            setUser(res.data)
            axios.get(`/api/workout/${res.data.member_id}`)
            .then(res => setWorkouts(res.data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }, [user.id])

    const mappedWorkouts = workouts.map((workout, i) => {
        return (
            <div key={i}>
                <span>{workout.workout_type}</span>
                <span>{workout.workout_time}</span>
                <span>{workout.workout_distance}</span>
                <span>{workout.workout_date}</span>
            </div>
        )
    })

    return (
    <div>{mappedWorkouts}</div>
    )
}

export default WorkoutDashboard;