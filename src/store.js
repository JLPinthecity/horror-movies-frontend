import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; 
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import horrorMovies from './reducers/horrorMovies.js';
import signupForm from './reducers/signupForm.js';
import openModalButton from './reducers/openModalButton.js';
import searchBar from './reducers/searchBar.js';
import navBar from './reducers/navBar.js'
import signupModal from './reducers/signupModal.js';
import backgroundImage from './reducers/backgroundImage.js';
import newMovieForm from './reducers/newMovieForm.js';
import horrorMovie from './reducers/horrorMovie.js';
import movieDataLoaded from './reducers/movieDataLoaded.js';
import review from './reducers/review.js';
import date from './reducers/date.js';
import reviewForm from './reducers/reviewForm.js';
import showReviewForm from './reducers/showReviewForm.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    usersReducer,
    currentUser,
    loginForm,
    horrorMovies,
    signupForm,
    navBar,
    openModalButton,
    searchBar,
    signupModal,
    backgroundImage,
    newMovieForm,
    horrorMovie, 
    review,
    movieDataLoaded,
    date,
    reviewForm,
    showReviewForm
})
  
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;