import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Home from './screens/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter
        basename={process.env.PUBLIC_URL}
    >
        <Home />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
