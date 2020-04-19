import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import Article from './Article';
import PageNotFound from '../PageNotFound';
import About from './About';
import Contracts from './Contracts';
import Contact from './Contact';
import Jobs from './Jobs';
import Services from "./Services";

const SectionWrapper = styled.div`
    
`;

const Section = () => {
    return (
        <SectionWrapper>
            <Switch>
                <Route path="/about" render={() => <About/>}/>
                <Route path="/projects" render={() => <Contracts/>}/>
                <Route path="/services" render={() => <Services/>}/>
                <Route path="/jobs" render={() => <Jobs/>}/>
                <Route path="/contact" render={() => <Contact/>}/>
                <Route render={() => <PageNotFound/>}/>
            </Switch>
        </SectionWrapper>
    );
};


export default Section;