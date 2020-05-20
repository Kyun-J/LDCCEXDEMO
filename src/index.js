import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import main from './component/main';

ReactDom.render(
    <Router>
        <Switch>
            <Route exact path="/" component={main} />
        </Switch>
    </Router>
    , document.getElementById('root')
);