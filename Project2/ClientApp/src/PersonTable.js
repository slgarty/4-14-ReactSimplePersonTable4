import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';

class PersonTable extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: []
    }

    onFirstNameChange = e => {
        this.setState({ person: { ...this.state.person, firstName: e.target.value } });
    }

    onLastNameChange = e => {
        this.setState({ person: { ...this.state.person, lastName: e.target.value } });
    }

    onAgeChange = e => {
        this.setState({ person: { ...this.state.person, age: e.target.value } });
    }

    onAddClick = () => {
        const copy = [...this.state.people, this.state.person];
        this.setState({ people: copy, person: { firstName: '', lastName: '', age: '' } })
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }

    tableContent = () => {
        if (this.state.people.length === 0) {
            return <h1>No people yet. Add some people!</h1>
        }
        return (
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((person, idx) => <PersonRow person={person} key={idx} />)}
                </tbody>
            </table>
        )
    }
    render() {

        return (
            <div className="container mt-5">
                <PersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    person={this.state.person} />
                {this.tableContent()}
            </div>
        );
    }
}

export default PersonTable;