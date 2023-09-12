import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`${this.state.value}, you have successfully logged in!`);
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value = {this.state.value} onChange={this.handleChange}/>
                <label>Password</label>
                <input type ="password" name = "password"/>
                <input type = "submit" value = "submit"/>
            </form>
        </div>
        );
    }
}

export default Login;
