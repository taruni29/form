import gql from 'graphql-tag';

const queries = {
  SIGNIN : gql`
  query signUp($userName:String,$password:String) {
   signUp(userName:$userName,password:$password) {
     _id firstName 
   }
 }
 `
}

export default queries;
