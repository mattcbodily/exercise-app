import React, {useState} from 'react';
import './Landing.scss';
import bike from '../../assets/road-bike.png';

const Landing = () => {
    return (
        <div class='landing'>
            <img src={bike} alt='road-bike' class='modal-image'/>
            <h1>AppName Here</h1>
            <input />
            <br/>
            <input type='password'/>
            <h3>Exercise Gamified.</h3>
        </div>
    )
}

export default Landing;