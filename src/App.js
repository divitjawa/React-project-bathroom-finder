import React, { Component } from 'react';
import GlobalStyle from './styles/Global';
import {
    Route,
    BrowserRouter,
    Switch
  } from "react-router-dom";

import '../src/css/App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MapContainer from './components/MapContainer';
import Form from './components/Form';
import './css/App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarOpen: false,
            public: {},
            isSignedIn:false
        };
        this.favoritesRef = firebase.database().ref("mybathrooms");
        this.publicRef = firebase.database().ref("allBathrooms");
        this.publicRef.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({public: data})
        })
    }



    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }


    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

    render() {
            if (!this.state.isSignedIn) {
                return (
                    <>
                    <div>
                        <h1>Bathroom Finder</h1>
                        <p>Please sign-in for more functionality:</p>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                    </div>
                        <About/>
                    </>
                );
            }
        return (
            <>
                <Navbar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
                <Route>
                    <div>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/" component={MapContainer} />
                        <Route exact path="/bathroom" component={MapContainer} />
                        <Route exact path="/bathroom" component={Form} />
                        <Route exact path="/about" component={About} />
                    </div>
                </Route>

                <GlobalStyle />

                <div>
                    <h1>You are logged in to Bathroom-Finder</h1>
                    <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
                    <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </div>
            </>



        );
    }
}

export default App;