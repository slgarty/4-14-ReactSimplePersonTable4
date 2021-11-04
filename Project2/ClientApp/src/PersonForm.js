import React from 'react';

class PersonForm extends React.Component {

    render() {

        let { firstName, lastName, age } = this.props.person
        let { onAddClick, onClearClick, onFirstNameChange, onLastNameChange, onAgeChange } = this.props
        return (
            <div className="container">
                <div className="row jumbotron mt-5">
                    <div className="col-md-3">
                        <input type="text" className="form-control"
                            value={firstName} onChange={onFirstNameChange} placeholder="First Name" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={lastName} onChange={onLastNameChange} placeholder="Last Name" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={age} onChange={onAgeChange} placeholder="Age" />
                    </div>

                    <div className="col-md-1">
                        <button  className="btn btn-info" onClick={onAddClick}>Add</button>
                    </div>
                    <div className="col-md-1">
                        <button  className="btn btn-warning" onClick={onClearClick}>Clear</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default PersonForm;