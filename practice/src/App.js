import React from 'react';
import Route from 'react-router-dom';

import NavBar from './components/NavBar';
import Feed from './components/Feed';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Feed} />
      <Route path='/signup' component ={Form} />
    </div>
  );
}

export default App;
