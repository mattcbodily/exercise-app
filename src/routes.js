import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import DashBoard from './Components/DashBoard/DashBoard';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={DashBoard}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)