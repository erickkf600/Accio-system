import React from 'react'
import { Route } from "react-router-dom";

export function getRoutes(routes) {
    return routes.map((prop, key) =>{
        return(
            <Route path={prop.path} component={prop.component} key={key}/>
        )
    })
};

export const mapStateToProps = state => ({
    links: state.setRoutes
})