import React, { Component } from 'react';
import '../css/style.css';
import '../css/App.css';
import App from '../App';
import firebase from 'firebase';

export class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            comments: '',
            type: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTypeChange = this.handleEmailChange.bind(this);
        this.handleCommentsChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.favoritesRef = firebase.database().ref("mybathrooms");
        this.publicRef = firebase.database().ref("allBathrooms");
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }

    handleCommentsChange(event) {
        this.setState({comments: event.target.value});
    }

    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.email);
        event.preventDefault();
        var email = this.state.email;
        var comments = this.state.comments;
        var type = this.state.type;
        this.favoritesRef.push({
            email, type, comments
        })
    }

    render() {
        return (<>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div className='formtitle'>
                        <h1>Add a Bathroom</h1>  
                    </div>
                </div>
                <div className='email'>
                        <label> Email:
                        <br></br>
                        <input id='email1' type="text" placeholder="name@mail.com" value={this.state.email} onChange={this.handleEmailChange} />
                        </label>
                </div>
                <div className='type'>
                    <label>Bathroom Type:</label>
                    <br></br>
                    <select onChange={this.handleTypeChange}>
                        <option value= "with" aria-label="with-baby-station">WITH baby station</option>
                        <option value= "without" aria-label="without-baby-station">WITHOUT baby station</option>
                    </select>
                </div>
                <div className='comments'>
                    <label> Comments or Suggestions?
                        <br></br>
                        <input id='comments' type="text" placeholder="Suggestions" value={this.state.comments} onChange={this.handleCommentsChange} />
                    </label>
                </div>
                <div className='submit'> 
                    <input id='submit1' type="submit" value="Submit" />
                </div>
            </form>
            </>
        );
    }
}

export default Form;