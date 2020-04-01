import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import Article from './Article';
import PageNotFound from '../PageNotFound';


const SectionWrapper = styled.div`
    
`;

const Section = () => {
    return (
        <SectionWrapper>
            <Switch>
                <Route path="/article" render={() => <Article/>}/>
                <Route path="/jobs" render={() => <Article/>}/>
                <Route render={() => <PageNotFound/>}/>
            </Switch>
        </SectionWrapper>
    )
}


export default Section;