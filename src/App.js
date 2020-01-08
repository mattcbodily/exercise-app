import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import routes from './routes';
import './reset.scss';
import './App.scss';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname !== '/'
      ? <Header />
      : null}
      {routes}
    </div>
  );
}

export default withRouter(App);