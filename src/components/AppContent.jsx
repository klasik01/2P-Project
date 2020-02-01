import React from 'react';
import styled from 'styled-components';
import TopBar from './menu/TopBar';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import { Container } from 'reactstrap';
import Poe from './common/Poe';
import poes from '../data/poes.json';


const AppWrapper = styled.div`
`;

const AppContent = () => {
    console.log(poes);
    return (
        <>
            <TopBar />
            <AppWrapper className="">
                <Container>
                    <Banner />
                    <Poe header={poes['FIRST'].header} paragraphs={poes['FIRST'].paragraphs} />
                    <Footer />
                </Container>
            </AppWrapper>
        </>
    )
}


export default AppContent;