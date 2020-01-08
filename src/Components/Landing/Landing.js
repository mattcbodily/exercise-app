import React, {useState} from 'react';
import axios from 'axios';
import './Landing.scss';
import bike from '../../assets/road-bike.png';

const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    //Add function that will allow user to see their typed password
    const [showPassword, setShowPassword] = useState('password');

    const toggleRegister = () => {
        setShowRegister(!showRegister)
    }

    const login = () => {
        axios.post('/api/login', {email, password}).then(res => {
            //route to dashboard here
        }).catch(err => console.log(err))
    }

    const register = () => {
        if(password !== verPassword){
            alert("Passwords don't match")
        }
        axios.post('/api/register', {email, password}).then(res => {
            //route to dashboard here(potentially a first time login route?)
        }).catch(err => console.log(err))
    }

    return (
        <div className='landing'>
            <img src={bike} alt='road-bike' className='modal-image'/>
            <h1>AppName Here</h1>
            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <input 
                type={showPassword} 
                value={password} 
                maxLength='16' 
                onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            {!showRegister
            ? (
                <>
                    <button onClick={login}>Login</button>
                    <p onClick={toggleRegister}>Register Here</p>
                </>
            ) : (
                <>
                    <input 
                        type={showPassword} 
                        value={verPassword} 
                        maxLength='16'
                        onChange={(e) => setVerPassword(e.target.value)}/>
                    <button onClick={register}>Register</button>
                    <p onClick={toggleRegister}>Login Here</p>
                </>
            )}
            <h3>Exercise Gamified.</h3>
        </div>
    )
}

export default Landing;