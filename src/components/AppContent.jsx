import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Article from './articles/Article';
import Footer from './footer/Footer';
import { BrowserRouter as Router, withRouter, Switch, Route } from 'react-router-dom';
import Home from './home/Home';


const AppWrapper = styled.div`
`;

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return children || null
})

const AppContent = () => {
    return (
        <AppWrapper className="">
            <TopBar />
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/article" render={() => <Article />} />
                </Switch>
                <Footer />
            </ScrollToTop>
        </AppWrapper>
    )
}


export default AppContent;