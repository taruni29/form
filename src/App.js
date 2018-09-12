import React, { Component } from 'react';
//import './App.css';
import SignIn from './SignIn';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import Welcome from './Welcome';


class App extends Component {
  render() {
    return (

      <Router>
           <div>
                  <Route exact path="/" component={SignIn}/>
                  <Route exact path="/SignUp" component={SignUp}/>
                  <Route exact path="/Welcome" component={Welcome}/>
                  <Route exact path="/SignIn" component={SignIn}/>

          </div>
           </Router>

    )
  }
}

export default App;
