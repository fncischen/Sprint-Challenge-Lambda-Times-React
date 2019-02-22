import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from "./components/Login";
import LogIn from './components/Login';

const EntireSite = props => {
  return (
    <div className="App">
      <TopBar login={props.islogin} signInText={props.signin} />
      <Header />
      <Content />
    </div>
  );
}

// Higher Order Components

function authenticate(App, Login, isLoggingIn) {
  if (isLoggingIn == true) {
    return <Login />
  }
  else {
    return <App />
  }
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggingIn: false,
      SignInText: "Log In"
    };
  }

  loggingIn = e => {
    if (!this.state.loggingIn) {
      this.setState({loggingIn: true})
    }
    else {
      this.setState({loggingIn: false})
    }
  }

  componentDidMount() {
    if(localStorage.getItem("username") && (localStorage.getItem("password"))) {
      this.setState({loggingIn: false})
    }
  }

  render() {

    // low key version of Higher Order Components

    if (this.state.loggingIn == true) {
      return <Login />
    }
    else {
      return <EntireSite islogin={this.loggingIn} />
    }
  }
}

export default App;
