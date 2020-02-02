import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Slider from './banner/Slider';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import Section from './sections/Section';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';


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
            <Router>
                <ScrollToTop>
                    <TopBar />
                    <Banner id="home" />
                    {/* <Slider /> */}
                    <Section />
                    <Footer />
                </ScrollToTop>
            </Router>
        </AppWrapper>
    )
}


export default AppContent;