import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

    return (
        <div>
            <button onClick={() => setAddWorkout(!addWorkout)}>Add a Workout</button>
            {addWorkout
            ? <Workout />
            : null}
        </div>
    )
}

export default DashBoard;