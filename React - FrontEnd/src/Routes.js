import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contacts from './pages/Contacts';
import Admin from './pages/Admin';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/contacts">
                <Contacts />
            </Route>
            <Route exact path="/">
                <Admin />
            </Route>
        </Switch>
    );
}

export default Routes;