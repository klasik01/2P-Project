import React from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Section from './sections/Section';
import PageNotFound from './PageNotFound';

const AppWrapper = styled.div`
`;

const AppContent = (props) => {
    const { classOnScroll } = props;


    return (
        <AppWrapper className="">
            <TopBar classOnScroll={classOnScroll} />
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route render={() => <Section />} />
                <Route render={() => <PageNotFound/>}/>
            </Switch>
            <Footer />
        </AppWrapper>
    )

}


export default AppContent;