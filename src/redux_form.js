import {initialState} from './initialState';

 //Actions
 export const selectSignIn=(signInId)=>{
 	return {
 		type:'SELECT_SIGNIN',
 		payload: signInId
 	}
 }

 export const saveUser=(user)=>{
 	return {
 		type:'SAVE_USER',
		payload: user
 	}
 }


 // export const saveUser = (user) => ({type: SAVE_USER, payload: user})
 //


//Reducers
//
// export const form=(signIn=initialState,action)=>{
// 	switch(action.type){
// 	    case 'SELECT_SIGNIN':
// 	      	return {
// 	        	signInId: action.signInId
// 	      	};
// 	    case 'SAVE_USER':
// 	      	return {
// 	        	user: action.payload
// 	      	};
// 		default:
// 			return signIn;
// 	}
// }
//



export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_SIGNIN':
      return {...state, signInId: action.payload}
    case "SAVE_USER":
      return {...state, user: action.payload}
    default:
      return state
  }
}
