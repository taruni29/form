import React, {Component} from 'react';
import SignIn from './SignIn';
import Welcome from '.Welcome';

import {
	Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';
import store from './store';

class Form extends Component{
  constructor(props){
    super(props);

    console.log('Form Props:' + JSON.stringify(props))

    this.state={
      signInId:'',
      welocomeId:''
    }

    this.onSignInSelected=this.onSignInSelected.bind(this)
    this.onWelcomeSelected=this.onWelcomeSelected.bind(this)


  }

  onSignInSelected(signInId){
    this.setState({
      signInId
    },()=>{
      store.dispatch({type:"SELECT_SIGNIN",signInId})
      console.log(store.getState());
    })
  }

  onWelcomeSelected(welcomeId){
    console.log('Form:onWelcomeSelected: ' + welcomeId)
    this.setState({
      welocmeId
    },()=>{
      store.dispatch({type:"SELECT_WELCOME",welcomeId})
      console.log(store.getState());
    })
  }

  render(){

		 if(this.state.signInId == '') {
			return (
		        <SignIn onSignInSelected={this.onSignInSelected}/>
				)
		}
		else if(this.state.welocmeId == '') {
			return (
		        <Welcome onWelcomeSelected={this.onWelcomeSelected} />
				)
		}
		else
		{
			return (
		              	<div>error</div>
				)
		}
	}

}

export default Form;
