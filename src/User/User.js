import React, { Component } from 'react';

class User extends Component {
    render() {
        return(
            <div className="person">
            <p>Nom: {this.props.name}</p>
            <p>{this.props.secondname}</p>
            <p>{this.props.age}</p>
        </div>
        );
    }
}

export default User;