import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { PrettyHeader } from '../common/PretyHeader';


const SectionWrapper = styled(Container)`
    background: white;
    padding: 50px;
    padding-top: 100px;
    margin-top: 100px;
    margin-bottom: 20px;
    z-index: 2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Article = () => {
    return (
        <SectionWrapper className="py-2">
            <PrettyHeader>Article 1</PrettyHeader>
        </SectionWrapper>
    )
}


export default Article;