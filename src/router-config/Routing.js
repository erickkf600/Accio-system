import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import * as routerActions from './routes.actions.jsx'
import Sidebar from "./../shared/sidebar/Sidebar"
import Toolbar from "./../shared/toolbar/Toolbar"

const Routing = ({links}) => {
    return (
        <BrowserRouter>
                <Toolbar />
                <Sidebar />
                <Switch>
                    {routerActions.getRoutes(links)}
                    <Redirect from="/" to="/home" />
                    <Redirect from="*" to="/home" />
                </Switch>
        </BrowserRouter>

    );
}
export default connect(routerActions.mapStateToProps)(Routing);

    
