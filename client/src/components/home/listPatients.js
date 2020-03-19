import React, { Component } from 'react'
import PatientInfo from '../selected/patientInfo'

export class listPatients extends Component {

    state = {
        firstName: 'Arnel',
        lastName: 'Hernandez',
        bloodPressure: '120/80',
        pulse: '60',
        respirations: '18',
        temperature: '96.8'
    }

    render() {
        
        return (
            <div>
                <h1>Shift 1</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.firstName}</td>
                            <th>
                                <button type="button" class="btn btn-primary">Select</button>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <PatientInfo 
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                bloodPressure={this.state.bloodPressure}
                pulse={this.state.pulse}
                respirations={this.state.respirations}
                temperature={this.state.temperature}
                />

            </div>
        )
    }
}

export default listPatients