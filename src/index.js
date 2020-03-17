import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseConfig = {
    apiKey: "AIzaSyDGNrAv1oR-EpKhwHtWLB35lTVeuxgA0R8",
    authDomain: "info340-21131.firebaseapp.com",
    databaseURL: "https://info340-21131.firebaseio.com",
    projectId: "info340-21131",
    storageBucket: "info340-21131.appspot.com",
    messagingSenderId: "793888007259",
    appId: "1:793888007259:web:19c89653777062a7b30b7e",
    measurementId: "G-Y7EPYXFXM2"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
firebase.analytics();

const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
