import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Workout from '../Workout/Workout';

const DashBoard = (props) => {
    const [user, setUser] = useState({})
    const [addWorkout, setAddWorkout] = useState(false)

    useEffect(() => {
        axios.get('/api/user').then(res => {
            setUser(res.data)
        }).catch(err => {
            props.history.push('/')
        })
    }, [props.history])

    const toggleWorkoutView = () => {
        setAddWorkout(!addWorkout)
    }

    return (
        <div>
            <button onClick={toggleWorkoutView}>Add a Workout</button>
            {addWorkout
            ? <Workout id={user.member_id} toggleFn={toggleWorkoutView}/>
            : null}
            <section>
                <Link to='workout-dashboard'>View Workouts</Link>
            </section>
        </div>
    )
}

export default DashBoard;