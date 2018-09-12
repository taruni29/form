import React, { Component } from 'react';
import queries from './utils/queries';
import mutations from './utils/mutations';
import { graphql,compose} from 'react-apollo';
import swal from 'sweetalert';
import PropTypes from 'prop-types'
import store from './store';
import {connect} from 'react-redux';
import {saveUser} from './redux_form';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  constructor(props){
      super(props);

      this.state={
           signIn:[]
      }

      this.onSignInSelected=this.onSignInSelected.bind(this);
  }

  onSignInSelected(id){
    console.log("SignIn:onSignInSelected-" + id)
    this.props.onSignInSelected(id);
  }

  SignIn(){
    document.getElementById("messagegeneralNumber").innerHTML = '';

    var userName  = document.getElementById("Username").value
    var userPassword  = document.getElementById("Userpassword").value
    //console.log(userName+" "+userPassword+"Login Details")
            if(userName === ""){
              document.getElementById("messageUserName").innerHTML = "Please enter User Name";
              return false;
            }
            else if(!(userName.length>=4 && userName.length<=20)){
              document.getElementById("messageUserName").innerHTML = "User Name should be 4-20 characters";
              return false;
            }
            else if(userName !== ''){
              document.getElementById("messageUserName").innerHTML = "";


                if(userPassword === ""){
                  document.getElementById("messagePassword").innerHTML ="Please enter Password";
                  return false;
                }
                else if(userPassword.length<=3){
                  document.getElementById("messagePassword").innerHTML = "Password should be minimum 4 characters";
                  return false;
                }
                else if(userPassword !== ''){
                  document.getElementById("messagePassword").innerHTML = "";

                        console.log(this.props)
                      this.props
                      .signIn({
                        variables: {
                          password:userPassword,
                          userName: userName
                        }
                      })

                      .then(({ data }) => {
                    //    alert("welcome to the my website")
                        if(data.signIn.error === "true"){
                          console.log("hello is le"+data.signIn.message)
                          document.getElementById("messagegeneralNumber").innerHTML = data.signIn.message;
                          return false;
                        }else {
                          this.props.saveUser(data.signIn);
                          this.props.history.push('/Welcome');
                          document.getElementById("messagegeneralNumber").innerHTML = '';
                        }
                      })
                      .catch(error => {
                        // alert("data is "+JSON.stringify(error))
                      //  alert("please check your creditionals");
                    //  swal("please enter valid username/password")
                      })
                    }
                  }
                }

  render() {
    return (
            <div className="container">
              <form className="well form-horizontal"  id="contact_form">
                <fieldset>
                  {/* Form Name */}
                  <legend><center><h2><b>Sign In</b></h2></center></legend><br />
                  {/* Text input*/}

                  <div className="form-group">
                    <label className="col-md-4 control-label">Username</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                        <input name="user_name" id="Username" placeholder="Username" className="form-control" type="text" />
                      </div>
                      <center id="messageUserName" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Password</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input name="user_password" id="Userpassword" placeholder="Password" className="form-control" type="password" />
                      </div>
                      <center id="messagePassword" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                    </div>
                  </div>

                  {/* Select Basic */}
                  {/* Success message */}

                  {/* Button */}
                  <h1 id="messagegeneralNumber"></h1>
                  <div className="form-group">
                    <label className="col-md-4 control-label" />
                    <div className="col-md-4"><br />
                  <button type="button" onClick={this.SignIn.bind(this)} className="btn btn-warning">LOGIN</button>
                     <p>dont have an account?<a href="./signUp">SignUp</a></p>
                     </div>
                  </div>
                </fieldset>
              </form>
            </div>

          );
        }
      };


const SignInForm = compose(graphql(mutations.SIGNIN,{name:'signIn'}))(SignIn);


export default  withRouter(connect((state) => ({user: state.user.user}),{saveUser})(SignInForm));
