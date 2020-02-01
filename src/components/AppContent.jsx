import React from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Banner from './banner/Banner';
import Footer from './footer/Footer';


const AppWrapper = styled.div``;

function AppContent() {
    return (
        <AppWrapper>
            <TopBar />
            <Banner />
            <Footer />
        </AppWrapper>
    )
}


export default AppContent;