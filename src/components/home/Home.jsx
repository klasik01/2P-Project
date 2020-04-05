import React from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';
import useScreenType from '../../utils/screenType';
import AboutInfo from './common/AboutInfo';
import Jobs from './common/Jobs';
import Contracts from './common/Contracts';
import Services from './common/Services';

const HomeWrapper = styled.div`
`;

const Home = () => {
    const screenType = useScreenType();
    return (
        <HomeWrapper className="">
            <Banner id="home"/>
            <Services screenType={screenType}/>
            <Contracts/>
            <Jobs/>
            <AboutInfo/>

        </HomeWrapper>
    );
};

export default Home;