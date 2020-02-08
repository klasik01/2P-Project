import React, { useLayoutEffect, useMemo, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
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

    const [classOnScroll, setStyleOnScroll] = useState(true)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > -80
            if (isShow !== classOnScroll) setStyleOnScroll(isShow)
        },
        [classOnScroll], false, false, 300
    )

    return useMemo(() => {
        return (
            <AppWrapper className="">
                <TopBar classOnScroll={classOnScroll} />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/article" render={() => <Article />} />
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </AppWrapper>
        )
    },
        [classOnScroll]
    );
}


export default AppContent;