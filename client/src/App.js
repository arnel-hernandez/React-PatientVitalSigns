import React from 'react';
import './App.css';

import Patients from './components/home/listPatients'
import PatientInfo from './components/selected/patientInfo'

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
            <Route path='/patient/:id' component={PatientInfo} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
