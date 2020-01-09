import React, {useState} from 'react';
import axios from 'axios';

const Workout = (props) => {
    const [workoutType, setWorkoutType] = useState('run');
    const [workoutTime, setWorkoutTime] = useState('');
    const [workoutDistance, setWorkoutDistance] = useState('');
    const [workoutDate, setWorkoutDate] = useState('');

    const addWorkout = () => {
        const workout = {
            id: props.id,
            workoutType,
            workoutTime,
            workoutDistance,
            workoutDate
        }

        axios.post('/api/workout', workout).then(res => {
            alert('Workout Added!')
            props.toggleFn()
        }).catch(err => console.log(err))
    }

    return(
        <div>
            <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
                <option value='run'>Run</option>
                <option value='bike'>Bike</option>
                <option value='swim'>Swim</option>
            </select>
            <br/>
            <input value={workoutTime} onChange={(e) => setWorkoutTime(e.target.value)}/>
            <br/>
            <input value={workoutDistance} onChange={(e) => setWorkoutDistance(e.target.value)}/>
            <br/>
            <input value={workoutDate} onChange={(e) => setWorkoutDate(e.target.value)} />
            <br/>
            <button onClick={addWorkout}>Submit</button>
        </div>
    )
}

export default Workout;