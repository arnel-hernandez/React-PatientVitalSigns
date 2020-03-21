import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class addPatientInfo extends Component {

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

    
    onSubmit = () => {
        console.log("Clicked")
    }

    onChange = (e) => {
        
    }

    render() {

        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label>Systolic</label>
                            <input type="text" className="form-control" maxLength={3}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Diastolic</label>
                            <input type="text" className="form-control" maxLength={3}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Pulse</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label>Respiration</label>
                            <input type="text" className="form-control" maxLength={3}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Temperature</label>
                            <input type="text" className="form-control" maxLength={3}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Save</button>
                    <Link to={'/patient/' + this.props.match.params.id} ><button className="btn btn-primary">Cancel</button></Link>
                </form>
            </div>
        )
    }
}

export default addPatientInfo
