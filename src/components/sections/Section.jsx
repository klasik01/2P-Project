import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import About from './sections/About';
import Contact from './sections/Contact';
import ContractMainPage from './sections/contracts/ContractMainPage';
import JobMainPage from './sections/jobs/JobMainPage';
import ServiceMainPage from './sections/services/ServiceMainPage';

const SectionWrapper = styled.div`

`;

const Section = () => {
    return (
        <SectionWrapper>
            <Switch>
                <Route path="/about" render={() => <About/>}/>
                <Route path="/projects" render={() => <ContractMainPage/>}/>
                <Route path="/services" render={() => <ServiceMainPage/>}/>
                <Route path="/jobs" render={() => <JobMainPage/>}/>
                <Route path="/contact" render={() => <Contact/>}/>
                <Route render={() => <PageNotFound/>}/>
            </Switch>
        </SectionWrapper>
    );
};


export default Section;
