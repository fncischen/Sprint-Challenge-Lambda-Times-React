import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from "./components/Login";
import LogIn from './components/Login';

const EntireSite = props => {
  return (
    <div className="App">
      <TopBar login={props.islogin} signInText={props.signInText} />
      <Header />
      <Content />
    </div>
  );
}

// Higher Order Components

// function authenticate(App, Login, isLoggingIn) {
//   if (isLoggingIn == true) {
//     return <Login />
//   }
//   else {
//     return <App />
//   }
// }

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggingIn: false,
      SignInText: "Log In"
    };
  }

  loggingIn = e => {

    if (localStorage.getItem("username") && (localStorage.getItem("password"))) {
      console.log("Logging out!");
      localStorage.clear();
      this.setState({loggingIn: false, SignInText: "Log In"});

      // create a new transition page
    }
    else if (this.state.loggingIn == false) {
      console.log("Logging in!");
      this.setState({loggingIn: true})
    }
  }

  componentDidMount() {
    if(localStorage.getItem("username") && (localStorage.getItem("password"))) {
      this.setState({loggingIn: false, SignInText: "Log Out"})
    }
  }

  render() {

    // low key version of Higher Order Components

    if (this.state.loggingIn == true) {
      return <Login />
    }
    else {
      return <EntireSite islogin={this.loggingIn} signInText={this.state.SignInText}/>
    }

  }
}

export default App;
