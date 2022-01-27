import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, MainNav } from '../_components';
import { HomePage } from '../pages/HomePage';
import { PatchPage } from '../pages/PatchPage/PatchPage.jsx'
import Container from '@mui/material/Container';

class App extends Component {
    
    render() {
        return (
            <div>
                <MainNav />
                <Container sx={{
                    pt: 3,
                }}>
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path='/update' component={PatchPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </Container>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };