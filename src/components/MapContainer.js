import React, { Component } from 'react';
import {App} from '../App';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
};
export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    render() {
        return (
            <>
            <div className= "display">
                <h2>Location</h2>
                <p id='one'>Latitude: {this.state.latitude}</p>
                <p id = 'two'>Longitude: {this.state.longitude}</p>
                <button id='getloc' onClick={this.getLocation}> Get Coordinates </button>   
            </div>
            <div className='map'>

            <Map google={this.props.google}
                 style={{width: '700px', height: '700px', position: 'fixed'}}

                 className={'map'}
                 zoom={14}>
                <Marker
                    name={'Added Bathroom'}
                    position={{lat: this.state.latitude, lng: this.state.longitude}}
                />
            </Map>
            </div>


            </>
        );
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        console.log(this.state);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                alert("Unknown error occured.")
        }
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyD4zGDaP_Otdfn9M2rev2ZLr0UERoxjBNg'
})(MapContainer);

