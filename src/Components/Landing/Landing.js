import React, {useState} from 'react';
import './Landing.scss';
import bike from '../../assets/road-bike.png';

const Landing = () => {
    return (
        <div class='landing'>
            <img src={bike} alt='road-bike' class='modal-image'/>
            <input />
            <br/>
            <input type='password'/>
        </div>
    )
}

export default Landing;