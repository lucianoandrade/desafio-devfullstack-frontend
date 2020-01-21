import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import listUser from '../views/listUser/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={listUser} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
