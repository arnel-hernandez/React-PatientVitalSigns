import React, { Component } from 'react'

export class addPatient extends Component {

    state = {
        patients: [
            {
                firstName: '',
                lastName: ''
            }
        ]
    }

    handleChange = (e) => {
            this.setState({
                patients: [
                    {
                        firstName: e.target.value,
                        lastName: e.target.value
                    }
                ]
            })
    }

    handleSubmit = (e) => {
        console.log("Submitted")
        console.log(this.state)
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        const patient = this.state.patients.map(patient => {
            return(
                <div>
                    <h1>{patient.firstName} </h1>
                    <h1>{patient.lastName}</h1>
                </div>
            )

        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" placeholder="Enter First Name" onChange={this.handleChange}/>
                    </div>
                        <label>Last Name: </label>
                        <input type="text" placeholder="Enter Last Name" onChange={this.handleChange}/>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <hr></hr>
                <h1>{patient}</h1>
            </div>
        )
    }
}

export default addPatient
