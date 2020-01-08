import React from 'react';
import Landing from './Components/Landing/Landing';
import routes from './routes';
import './reset.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;