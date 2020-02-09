import React from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Footer from './footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Section from './sections/Section';

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
            </Switch>
            <Footer />
        </AppWrapper>
    )

}


export default AppContent;