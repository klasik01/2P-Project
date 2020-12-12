import React from 'react';
import {Router} from 'react-router-dom';
import App from './App';
import history from '../history';
import SimpleReactLightbox from 'simple-react-lightbox';

const Root = () => (
    <SimpleReactLightbox>
        <Router history={history}>
            <App/>
        </Router>
    </SimpleReactLightbox>
);

export default Root;