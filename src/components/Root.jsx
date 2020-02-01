import React from 'react';
import { Router } from 'react-router-dom';
import App from './App';
import history from '../history';


const Root = () => (
    <Router history={history}>
        <App />
    </Router>
)

export default Root;