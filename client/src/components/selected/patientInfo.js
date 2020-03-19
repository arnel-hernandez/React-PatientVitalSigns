import React from 'react'

const patientInfo = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
                <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Blood Pressure</th>
                                <th>Pulse</th>
                                <th>Respirations</th>
                                <th>Temperature</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{props.id}</th>
                                <td>{props.lastName}</td>
                                <td>{props.firstName}</td>
                                <td>{props.bloodPressure}</td>
                                <td>{props.pulse}</td>
                                <td>{props.respirations}</td>
                                <td>{props.temperature} F </td>
                                <th>
                                    <button type="button" class="btn btn-primary">Edit</button>
                                </th>
                            </tr>
                        </tbody>
                </table>
            <a href="/"><button type="button" class="btn btn-primary">Return</button></a>
            <button type="button" class="btn btn-primary">Add Data</button>
        </div>
    )
}

export default patientInfo