import React from 'react';
import { PrettyHeader } from '../../common/PretyHeader';
import data from '../../../data/jobs.json';
import styled from "styled-components";
import { Container } from 'reactstrap';
import { PRIMARY } from '../../../theme/colors';

const WrapperContainer = styled(Container)`
`;
const JobsWrapper = styled.div`
    color: ${props => props.color};
`;

const Jobs = (props) => {
    return (
        <JobsWrapper className="text-center">
            <WrapperContainer>
                <PrettyHeader>zaměstnání</PrettyHeader>
                <div className="row">
                   
                </div>
            </WrapperContainer>
        </JobsWrapper>
    )
}

export default Jobs;