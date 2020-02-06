import React from 'react';
import styled from 'styled-components';
import Banner from './banner/Banner';
import Section from './Section';

const SectionWrapper = styled.div`
`;

const Home = () => {
    return (
        <SectionWrapper className="py-2">
            <Banner id="home"/>
            <Section/>
        </SectionWrapper>
    )
}


export default Home;