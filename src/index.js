import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

//REDUX
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Home from './screens/Home/';
import registerServiceWorker from './registerServiceWorker';

import ServiceFacade from './services/ServiceFacade';

//Logger
const logger = createLogger({
    predicate: (getState, action) => ServiceFacade.isDev(),
});

//Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter
            basename={process.env.PUBLIC_URL}
        >
            <Home />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
