import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowsAlt,
    faArrowsAltV,
    faBars,
    faCheck,
    faCheckCircle,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faCog,
    faCopy,
    faDownload,
    faExclamationCircle,
    faHome,
    faInfoCircle,
    faPen,
    faPencilAlt,
    faPlus,
    faSort,
    faSortDown,
    faSortUp,
    faTimes,
    faTrashAlt,
    faCircle,
    faLock,
    faLaptop
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faDownload, faTrashAlt, faArrowsAltV, faArrowsAlt, faPencilAlt, faChevronLeft, faChevronRight, faCheck, faTimes,
    faSort, faSortUp, faSortDown, faChevronDown, faPen, faHome, faCog, faBars, faExclamationCircle, faInfoCircle,
    faCheckCircle, faPlus, faCopy, faCircle, faLock, faLaptop
);

ReactDOM.render( < Root / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();