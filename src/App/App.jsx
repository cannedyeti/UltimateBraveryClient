import React, { Component, useContext, createContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { MainNav } from '../_components';
import { HomePage } from '../pages/HomePage';
import { PatchPage } from '../pages/PatchPage/PatchPage.jsx'
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ToggleTheme from '../_components/ToggleTheme/ToggleTheme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {

    return (
        <ToggleTheme>
            <MainNav />
            <Container sx={{
                pt: 3,
            }}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path='/update' component={PatchPage} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </Container>
        </ToggleTheme>
    );
};


