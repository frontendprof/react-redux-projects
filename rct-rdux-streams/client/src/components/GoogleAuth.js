
import React, { Component } from 'react';

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:"661438034220-jet93r187r620bif9qaosj8q6e9i7qmo.apps.googleusercontent.com",
                scope:"email"
            })
        })
    }


    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    };
};


export default GoogleAuth;