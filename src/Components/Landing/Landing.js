import React, {useState} from 'react';
import './Landing.scss';
import bike from '../../assets/road-bike.png';

const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false)

    const toggleRegister = () => {
        setShowRegister(!showRegister)
    }

    return (
        <div class='landing'>
            <img src={bike} alt='road-bike' class='modal-image'/>
            <h1>AppName Here</h1>
            <input value={email}/>
            <br/>
            <input type='password' value={password}/>
            {!showRegister
            ? (
                <>
                    <button onClick={toggleRegister}>Login</button>
                    <p>Register Here</p>
                </>
            ) : (
                <>
                    <input type='password' value={verPassword}/>
                    <button onClick={toggleRegister}>Register</button>
                    <p>Login Here</p>
                </>
            )}
            <h3>Exercise Gamified.</h3>
        </div>
    )
}

export default Landing;