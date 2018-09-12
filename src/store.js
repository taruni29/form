import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { initialState } from './initialState'

//Link reducers of all modules here
import  form  from './redux_form'

let reducers=combineReducers({
   user:form
})

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)



// //Store
// let configureStore=(initialState)=>{
// 	const store=createStore(
// 		reducers,
// 		initialState,
// 		applyMiddleware(thunk)
// 	)
// 	return store;
// }
//
// const store=configureStore(initialState);
//
// export default store;
