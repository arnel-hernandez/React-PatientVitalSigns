import React from 'react';
import './App.css';

import Patients from './components/home/listPatients'
import Patient from './components/selected/listPatient'

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/' component={Patients} />
            <Route path='/patient/:id' component={Patient} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
