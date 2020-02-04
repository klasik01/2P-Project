import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Banner from './banner/Banner';
import Section from './sections/Section';


const SectionWrapper = styled.div`
`;

const Home = () => {
    return (
        <SectionWrapper className="py-2">
            <Banner id="home" />
            {/* <Slider /> */}
            <Section />
        </SectionWrapper>
    )
}


export default Home;