import { applyMiddleware,  combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import { reducer as form } from 'redux-form';
import initialState from './initialState';

const configureStore = (initialStoreCountent= {}) => {
    const persistedState:Object = Object.assign(initialState, initialStoreCountent);
    const middlewares = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-stateinvariant').default(), thunk] :
    [thunk];
    const enhacers = [];
    
    enhacers.push(window.devToolsExtension ? window.devToolsExtension() : (f: any) => f);

    const appReducers = combineReducers({
        form
    });

    const store = createStore(
        appReducers,
        persistedState,
        compose(
            applyMiddleware(
                ...middlewares
            ),
            ...enhacers
        )
    );


    return store;
}

export default configureStore;