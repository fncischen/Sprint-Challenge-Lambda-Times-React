import React, { Component } from 'react';
import styled from 'styled-components'

const Styledloginbox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    background-color: #A9A9A9;

    width: 300px;
    margin: 10% auto;

    justify-content: center;

    input {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    img {
        width: 300px;
    }

    button {
        margin-top: 15px;
    }

`;

class LogIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    logIn = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
      };

    render() {

        return (
            <Styledloginbox>

            <input
            type="text"
            value={this.state.username}
            placeholder= "username"
            name="username"
            onChange={this.handleChanges}
            />

            <input
            type="text"
            placeholder= "password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
            />

            <button onClick={this.logIn}>Sign in</button>

            </Styledloginbox>
        )
    }
}

export default LogIn