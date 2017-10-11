import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='lander'>
                    <h1>Serverless Notes</h1>
                    <p>Notes...without a server?</p>
                </div>
            </div>
        )
    }
}