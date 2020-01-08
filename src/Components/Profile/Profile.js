import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Profile = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('/api/user').then(res => {
            setUser(res.data)
        }).catch(err => {
            props.history.push('')
        })
    }, [props.history])
    
    return (
        <div>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    )
}

export default Profile;