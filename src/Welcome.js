import React,{Component} from 'react';
import store from './store';
import {connect} from 'react-redux';
import {saveUser} from './redux_form';
import { withRouter } from 'react-router-dom';

class Welcome extends Component{

  constructor(props){
      super(props);

      this.state={
           user:props.user,
           userName:[]
      }

      // this.onWelcomeSelected=this.onWelcomeSelected.bind(this);
  }

  // onWelcomeSelected(id){
  //   console.log("Welcome:onWelcomeSelected-" + id)
  //   this.props.onWelcomeSelected(id);
  // }

    render(){
      return(
          <div>
            Welcome {this.state.user.userName}

          <a href="./SignIn" className="account">logOut</a>

            </div>
      )

  }
}


export default  withRouter(connect((state) => ({user: state.user.user}),{})(Welcome));
