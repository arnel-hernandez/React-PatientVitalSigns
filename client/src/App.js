import React from 'react';
import './App.css';

import Patients from './components/home/listPatients'
import Patient from './components/selected/listPatient'

import AddPatient from './components/home/addPatient'
import EditPatient from './components/home/updatePatient'

import AddPatientInfo from './components/selected/addPatientInfo'
import EditPatientInfo from './components/selected/editPatientInfo'

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

            <Route path='/addpatient' component={AddPatient} />
            <Route path='/editpatient/:id' component={EditPatient} />

            <Route path='/add/:id' component={AddPatientInfo} />
            <Route path='/edit/:id' component={EditPatientInfo} />

          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
