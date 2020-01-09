import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import DashBoard from './Components/DashBoard/DashBoard';
import Profile from './Components/Profile/Profile';
import WorkoutDashboard from './Components/WorkoutDashboard/WorkoutDashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={DashBoard}/>
        <Route path='/workout-dashboard' component={WorkoutDashboard}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)