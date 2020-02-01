import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Poe from '../common/Poe';
import poes from '../../data/poes.json';
import Services from './services/Services';


const SectionWrapper = styled.div`
`;

const Section = () => {
    return (
        <SectionWrapper className="py-2">
            <Container>
                <Poe header={poes['FIRST'].header} paragraphs={poes['FIRST'].paragraphs} />
                <hr />
                <Services />
                <hr />
                <Poe header={poes['SECOND'].header} paragraphs={poes['SECOND'].paragraphs} />
                <hr />
            </Container>
        </SectionWrapper>
    )
}


export default Section;