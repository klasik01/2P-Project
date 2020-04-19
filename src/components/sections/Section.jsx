import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ContractMainPage from './contracts/ContractMainPage';
import JobMainPage from './jobs/JobMainPage';

const SectionWrapper = styled.div`
    
`;

const Section = () => {
    return (
        <SectionWrapper>
            <Switch>
                <Route path="/about" render={() => <About/>}/>
                <Route path="/projects" render={() => <ContractMainPage/>}/>
                <Route path="/services" render={() => <Services/>}/>
                <Route path="/jobs" render={() => <JobMainPage/>}/>
                <Route path="/contact" render={() => <Contact/>}/>
                <Route render={() => <PageNotFound/>}/>
            </Switch>
        </SectionWrapper>
    );
};


export default Section;