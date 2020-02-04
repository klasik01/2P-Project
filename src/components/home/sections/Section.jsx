import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Poe from '../../common/Poe';
import poes from '../../../data/poes.json';
import Services from './services/Services';
import Gallery from './gallery/Gallery';


const SectionWrapper = styled(Container)`
    background: white;
    padding: 50px;
    padding-top: 100px;
    margin-top: -100px;
    z-index: 2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Section = () => {
    return (
        <SectionWrapper className="py-2">
            <Poe header={poes['FIRST'].header} paragraphs={poes['FIRST'].paragraphs} />
            <Services id="service" />
            <Poe header={poes['SECOND'].header} paragraphs={poes['SECOND'].paragraphs} />
            <Gallery id="gallery" />
        </SectionWrapper>
    )
}


export default Section;