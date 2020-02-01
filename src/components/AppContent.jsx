import React from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import Section from './sections/Section';


const AppWrapper = styled.div`
`;

const AppContent = () => {
    return (
        <AppWrapper className="">
            <TopBar />
            <Banner />
            <Section />
            <Footer />
        </AppWrapper>
    )
}


export default AppContent;