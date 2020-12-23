import React from 'react';
import {Router} from 'react-router-dom';
import App from './App';
import history from '../history';
import SimpleReactLightbox from 'simple-react-lightbox';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-186010871-1');
// eslint-disable-next-line no-undef
ReactGA.pageview(window.location.pathname + window.location.search);

const Root = () => (
    <SimpleReactLightbox>
        <Router history={history}>
            <App/>
        </Router>
    </SimpleReactLightbox>
);

export default Root;
