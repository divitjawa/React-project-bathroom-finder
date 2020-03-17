import React, { Component } from "react";
import App from '../App';
import firebase from 'firebase';
import '../css/style.css';

const Home = () =>(
 <div className="column" id="details">
   <div className='home'>
                <h1>Close to you:</h1>
                <h2>Starbucks</h2>
                <p>4147 The Ave, Seattle, WA 98105
                    <br></br>0.4mi
                    <br></br><br></br>-Private Institution
                    <br></br>-Purchase not necessary
                </p>
                <br></br>
                <h2>Domino's</h2>
                <p>4717 Brooklyn Ave NE Ste A, Seattle, WA 98105
                    <br></br>0.7mi
                    <br></br><br></br>-Restaurant
                    <br></br>-Purchase necessary
                </p>
                <br></br>
                <h2>University Branch Seattle Public Library</h2>
                <p> 5009 Roosevelt Way NE, Seattle, WA 98105
                    <br></br>0.9mi
                    <br></br><br></br>-Private Institution
                    <br></br>-Purchase not necessary
                </p>
                </div>
            </div>
)
 
export default Home;