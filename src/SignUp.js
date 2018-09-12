import React, { Component } from 'react';
import mutations from './utils/mutations'
import { graphql,compose} from 'react-apollo';
import swal from 'sweetalert';


class SignUp extends Component {

  SignUp(){
    document.getElementById("messagegeneralNumber").innerHTML = '';
    var firstName = document.getElementById("Firstname").value
    var lastName  = document.getElementById("Lastname").value
    var userName  = document.getElementById("Username").value
    var userPassword  = document.getElementById("Userpassword").value
    var confirmPassword  = document.getElementById("Confirmpassword").value
    var email  = document.getElementById("Emailaddress").value
    var contactNumber = document.getElementById("Contactnumber").value

    if(firstName === ""){
      document.getElementById("messageFirst").innerHTML = "Please enter First Name"
      return false;
    }
    else if(firstName !== ''){
      document.getElementById("messageFirst").innerHTML = ''

         if(lastName === ""){
          document.getElementById("messageLast").innerHTML = "Please enter Last Name"
          return false;
          }
          else if(lastName !== ''){
            document.getElementById("messageLast").innerHTML = '';

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

              var emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              if(email === ""){
                document.getElementById("messageSignupEmail").innerHTML = "Please enter Email";
                return false;
              }
              else if(!emailRegex.test(email)){
                document.getElementById("messageSignupEmail").innerHTML  = "Please enter valid Email";
                return false;
              }
              else if(email !== ''){
                document.getElementById("messageSignupEmail").innerHTML = "";

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

                  if(confirmPassword === ""){
                    document.getElementById("messageConfirmPassword").innerHTML ="Please enter Password";
                    return false;
                  }
                  else if(confirmPassword !== userPassword){
                    document.getElementById("messageConfirmPassword").innerHTML =" Password doesnot match";
                    return false;
                  }
                  else if(confirmPassword !== ''){
                    document.getElementById("messageConfirmPassword").innerHTML ='';

                    if(contactNumber === ""){
                      document.getElementById("messageContactNumber").innerHTML = "Please enter First Name";
                      return false;
                    }
                    else if(!(contactNumber.length >= 10)){
                      document.getElementById("messageContactNumber").innerHTML = "Contact Number should contain 10 numbers";
                      return false;
                    }
                    else if(contactNumber !== ''){
                      document.getElementById("messageContactNumber").innerHTML = '';

                        console.log(this.props)
                      this.props
                      .signUp({
                        variables: {
                          firstName:firstName,
                          lastName:lastName,
                          password:userPassword,
                          email: email,
                          userName: userName,
                          contactNumber:contactNumber
                        }
                      })
                      .then(({ data }) => {

                        //alert("data is "+JSON.stringify(data))
                        if(data.signUp.error === "true"){
                        //  alert("hai")

                          console.log("goutham is "+data.signUp.message)
                          document.getElementById("messagegeneralNumber").innerHTML = data.signUp.message;
                          return false;
                        }else {
                          //alert("hello")
                          alert("Thank You for Registering this website");
                          window.location.href = '/SignIn';
                          document.getElementById("messagegeneralNumber").innerHTML = '';
                        }
                      })

                      .catch(error => {
                        alert("data is "+JSON.stringify(error))
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }


  render() {
    return (
            <div className="container">
              <form className="well form-horizontal"  id="contact_form">
                <fieldset>
                  {/* Form Name */}
                  <legend><center><h2><b>Sign Up</b></h2></center></legend><br />
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label">First Name</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                        <input name="first_name" id="Firstname" placeholder="First Name" className="form-control" type="text" />
                      </div>
                      <center id="messageFirst" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                      </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Last Name</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                        <input name="last_name" id="Lastname" placeholder="Last Name" className="form-control" type="text" />
                      </div>
                      <center id="messageLast" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                    </div>
                  </div>
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
                    {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Confirm Password</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input name="confirm_password" id="Confirmpassword" placeholder="Confirm Password" className="form-control" type="password" />
                      </div>
                      <center id="messageConfirmPassword" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label">E-Mail</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" /></span>
                        <input name="email" placeholder="E-Mail Address" id="Emailaddress" className="form-control" type="text" />
                        </div>
                      <center id="messageSignupEmail" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Contact No.</label>
                    <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                        <input name="contact_no" placeholder="(91)" id="Contactnumber" className="form-control" type="number" />
                      </div>
                      <center id="messageContactNumber" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                      <center id="messagegeneralNumber" style={{marginTop: 5,textAlign: 'centre', color: '#de0000'}}></center>
                      </div>
                  </div>
                  {/* Select Basic */}
                  {/* Success message */}

                  {/* Button */}
                  <div className="form-group">
                    <label className="col-md-4 control-label" />
                    <div className="col-md-4"><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" href="./signIn" onClick={this.SignUp.bind(this)}  className="btn btn-warning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBMIT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>

          );
        }
      };


export default compose(graphql(mutations.SIGNUP,{name:'signUp'}))(SignUp);
