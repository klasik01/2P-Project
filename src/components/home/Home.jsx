import React from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';
import {Container} from 'reactstrap';
import Poe from '../common/Poe';
import poes from '../../data/poes.json';
import Services from './common/Services';
import Gallery from './common/Gallery';
import Jobs from "./common/Jobs";
import Order from "./common/Order";


const HomeWrapper = styled.div`
`;

const SectionWrapper = styled(Container)`
   /*  background: white;
    padding: 50px;
    padding-top: 100px;
    margin-top: -100px;
    z-index: 2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
`;


const Home = () => {
    return (
        <HomeWrapper className="">
            <Banner id="home" />
            <SectionWrapper className="py-2">
                <Poe header={poes['FIRST'].header} paragraphs={poes['FIRST'].paragraphs}/>
                <Services id="service"/>
                <Poe header={poes['SECOND'].header} paragraphs={poes['SECOND'].paragraphs}/>
                <Jobs id="job" />
                <Order id="order" />
                <Gallery id="gallery"/>
        </SectionWrapper>
        </HomeWrapper>
    )
}


export default Home;