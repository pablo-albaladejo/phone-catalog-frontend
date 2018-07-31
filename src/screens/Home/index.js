import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getIsFetching } from '../../reducers/root_reducer';
import { getErrorMessage } from '../../reducers/errors';

import Loadable from 'react-loading-overlay';

import NotFound from '../NotFound';
import PhoneDetail from '../PhoneDetail';
import PhonesList from '../PhonesList';

import ModalMessage from '../../components/ModalMessage';

class Home extends Component {

    render() {
        return (
            <Loadable
                active={this.props.isFetching}
                spinner
            >
                <div style={{ height: '100vh' }}>
                    
                    {this.props.errorMessage && (
                        <ModalMessage
                            message={this.props.errorMessage}
                        />
                    )}

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
                </div>


            </Loadable>
        )
    }
}
function mapStateToProps(state) {
    return {
        isFetching: getIsFetching(state),
        errorMessage: getErrorMessage(state),
    }
}
export default connect(mapStateToProps)(Home);
