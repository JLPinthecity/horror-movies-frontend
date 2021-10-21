import usersReducer from './reducers/users.js'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; 


const reducer = combineReducers({
    user: usersReducer
  })
  
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store