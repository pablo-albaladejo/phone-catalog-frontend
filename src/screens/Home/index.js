import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../NotFound';
import PhoneDetail from '../PhoneDetail';
import PhonesList from '../PhonesList';

class Home extends Component {

    render() {
        return (
            <Switch>

                {/* Error */}
                <Route exact path='/error/notfound' component={NotFound} />

                {/* PhoneDetail */}
                <Route exact path='/phone/:id' component={PhoneDetail} />

                {/* PhonesList */}
                <Route exact path='/' component={PhonesList} />

                {/*Default  */}
                <Redirect to="/error/notfound" />

            </Switch>
        )
    }
}
export default Home;
