import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';
import useScreenType from '../../utils/screenType';
import Jobs from './common/Jobs';
import Contracts from './common/Contracts';
import Services from './common/Services';

import textsData from '../../data/texts.json';
import jobsData from '../../data/jobs.json';
import contractsData from '../../data/orders.json';
import servicesData from '../../data/services.json';
import Preview from "./common/Preview";
import Calculate from "./common/Calculate";

const HomeWrapper = styled.div`
`;

const Home = () => {

    const [contracts] = useState(contractsData['LIST']);
    const [jobs] = useState(jobsData['LIST']);
    const [services] = useState(servicesData['LIST']);
    const [texts] = useState(textsData);

    const screenType = useScreenType();
    return (
        <HomeWrapper className="">
            <Banner id="home"/>
            <Preview info={texts.PREVIEW}/>
            <Services screenType={screenType} data={services} info={texts.SERVICE}/>
            <Contracts data={contracts} info={texts.CONTRACT}/>
            <Calculate info={texts.CALCULATE}/>
            <Jobs screenType={screenType} data={jobs} info={texts.JOB}/>
        </HomeWrapper>
    );
};

export default Home;
