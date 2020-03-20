import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class listPatients extends Component {

    state = {
        patients: [
            {id: 1,
            firstName: 'John',
            lastName: 'Hernandez',
            bloodPressure: '120/80',
            pulse: '60',
            respirations: '20',
            temperature: '97.0'},

            {id: 2,
            firstName: 'Bryan',
            lastName: 'White',
            bloodPressure: '129/81',
            pulse: '62',
            respirations: '18',
            temperature: '96.8'},
            
            {id: 3,
            firstName: 'James',
            lastName: 'Hurpy',
            bloodPressure: '120/80',
            pulse: '64',
            respirations: '19',
            temperature: '98.8'},
        ]
    }

    render() {
        const patientID = this.props.match.params.id
        const { patients } = this.state
        const patient = patients.find(id => id.id == patientID)
        return (
            <div>
                <h1><span className="badge badge-dark">Shift 1</span></h1>
                <div className="row p-3 mb-2 bg-dark text-white">
                    <div className="col">
                        ID
                    </div>
                    <div className="col">
                        Last Name
                    </div>
                    <div className="col">
                        First Name
                    </div>
                    <div className="col">
                        Blood Pressure
                    </div>
                    <div className="col">
                        Pulse
                    </div>
                    <div className="col">
                        Respirations
                    </div>
                    <div className="col">
                        Temperature
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
                <div className="row p-3 mb-2 bg-light text-dark">
                    
                    <div className="col">
                        {patient.id}
                    </div>
                    <div className="col">
                        {patient.lastName}
                    </div>
                    <div className="col">
                        {patient.firstName}
                    </div>
                    <div className="col">
                        {patient.bloodPressure}
                    </div>
                    <div className="col">
                        {patient.pulse}
                    </div>
                    <div className="col">
                        {patient.respirations}
                    </div>
                    <div className="col">
                        {patient.temperature}
                    </div>
                    <div className="col">
                        <Link to={'/patient/add/' + patient.id}>
                            <button type="button" class="btn btn-primary">Add</button>
                        </Link>
                        <Link to={'/patient/edit/' + patient.id}>
                            <button type="button" class="btn btn-primary">Edit</button>
                        </Link>
                    </div>
                </div>
                        <Link to='/'>
                            <button type="button" class="btn btn-primary">Return</button>
                        </Link>
            </div>
        )
    }
}

export default listPatients