import React, { Component } from 'react';

import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getIsFetching } from '../../reducers/root_reducer';
import { getErrorMessage } from '../../reducers/errors';
import { clearError } from '../../actions/errors';

import Loadable from 'react-loading-overlay';

import NotFound from '../NotFound';
import PhoneDetail from '../PhoneDetail';
import PhonesList from '../PhonesList';

import ModalMessage from '../../components/ModalMessage';

class Home extends Component {

    onErrorClose = () => {
        this.props.dispatch(clearError());
    }

    render() {
        return (
            <HashRouter>
                <Loadable
                    active={this.props.isFetching}
                    spinner
                >
                    <div style={{ height: '100vh' }}>

                        {this.props.errorMessage && (
                            <ModalMessage
                                message={this.props.errorMessage}
                                onClose={this.onErrorClose}
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
            </HashRouter>
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
