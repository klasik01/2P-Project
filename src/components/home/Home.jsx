import React from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';
import {Container} from 'reactstrap';
import Poe from '../common/Poe';
import poes from '../../data/poes.json';
import Services from './common/Services';
import Gallery from './common/Gallery';
import Jobs from "./common/Jobs";
import {LeftHeaderRightTextLayout, RightHeaderLeftTextLayout, CalculationLayout, ActualityLayout} from "../common/BlockLayout";


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
                <LeftHeaderRightTextLayout />
                <ActualityLayout />
                <RightHeaderLeftTextLayout />
                <CalculationLayout />
        </HomeWrapper>
    )
}


export default Home;