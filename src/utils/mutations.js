import gql from 'graphql-tag';

const mutations = {
  SIGNUP : gql`
  mutation signUp($firstName:String,$lastName:String,$email:String,$userName:String,$password:String,$contactNumber:String) {
   signUp(firstName:$firstName,lastName:$lastName,email:$email,userName:$userName,password:$password,contactNumber:$contactNumber) {
     _id firstName lastName userName email createdDate  message error password contactNumber
   }
 }
 `,
 SIGNIN : gql`
 mutation signIn($userName:String,$password:String) {
  signIn(userName:$userName,password:$password) {
    _id  userName password
  }
}
`


}

export default mutations;
