import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Contracts from './Contracts';
import PageNotFound from '../../PageNotFound';
import ContractDetail from './ContractDetail';

const ContractMainPage = () => {
    return (
        <Switch>
            <Route exact path="/projects" render={() => <Redirect to={'/projects/list'}/>}/>
            <Route exact path="/projects/list" render={() => <Contracts/>}/>
            <Route exact path="/projects/:view(view)/:projectId(.*)" render={() => <ContractDetail/>}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

export default ContractMainPage;
