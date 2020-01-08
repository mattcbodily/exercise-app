import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
    <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/profile'>Profile</Link>
    </nav>
) 

export default Menu;