import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import PageNotFound from '../../../PageNotFound';
import Jobs from './Jobs';

const ContractMainPage = () => {
    return (
        <Switch>
            <Route exact path="/jobs" render={() => <Redirect to={'/jobs/list'}/>}/>
            <Route exact path="/jobs/list" render={() => <Jobs/>}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

export default ContractMainPage;
