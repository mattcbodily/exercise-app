import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DashBoard = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('/api/user').then(res => {
            setUser(res.data)
        }).catch(err => {
            props.history.push('/')
        })
    }, [props.history])

    return (
        <div>DashBoard Component</div>
    )
}

export default DashBoard;