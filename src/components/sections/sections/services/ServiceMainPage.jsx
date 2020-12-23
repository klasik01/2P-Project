import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contracts from './Services';
import PageNotFound from '../../../PageNotFound';
import ServiceDetail from './ServiceDetail';

const ServiceMainPage = () => {
    return (
        <Switch>
            <Route exact path="/services" render={() => <Redirect to={'/services/list'}/>}/>
            <Route exact path="/services/list" render={() => <Contracts/>}/>
            <Route exact path="/services/:view(view)/:id(.*)" render={() => <ServiceDetail/>}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

export default ServiceMainPage;
