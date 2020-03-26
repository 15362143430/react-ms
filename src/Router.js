import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
// import Dashboard from './pages/admin/dashboard/Index';
import List from './pages/admin/product/List';
import App from './App'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/content" component={App}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;