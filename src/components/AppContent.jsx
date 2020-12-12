import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Footer from './Footer';
import Home from './home/Home';
import Section from './sections/Section';
import PageNotFound from './PageNotFound';
import PropTypes from 'prop-types';

const AppWrapper = styled.div`
`;

const Main = styled.main`
    
`;

const AppContent = ({classOnScroll}) => {
    const {pathname} = useLocation();

    return (
        <AppWrapper className="d-flex flex-column min-vh-100">
            <TopBar classOnScroll={classOnScroll}/>
            <Main className="wrapper flex-grow-1">
                <Switch>
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route render={() => <Section/>}/>
                    <Route render={() => <PageNotFound/>}/>
                </Switch>
            </Main>
            <Footer visible={pathname !== '/contact'}/>
        </AppWrapper>
    );
};

AppContent.propTypes = {
    classOnScroll: PropTypes.bool.isRequired
};


export default AppContent;