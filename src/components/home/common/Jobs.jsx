import React from 'react';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import styled from 'styled-components';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {PrimaryButton, StyledLink} from '../../common/Button';
import PropTypes from 'prop-types';
import {showMaxSmall} from '../../../utils/screenType';

const JobsWrapper = styled.div`
`;

const BlockWrapper = styled.div`
`;

const BlockItem = styled.div`
`;

export const JobCard = (props) => {
    const {image} = props;
    return (
        <BlockWrapper backgroundImage={image} className="col-md-6 col-sm-12">
            <BlockItem className="p-4 my-2 text-center">
                <div>
                    <img src={image} className="img-fluid w-75" alt="item"/>
                </div>
            </BlockItem>
        </BlockWrapper>
    );
};

JobCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string
};

const Jobs = (props) => {
    const {screenType, data = [], info} = props;
    return (
        <JobsWrapper className="text-center">
            <DefaultSectionContainer>
                {!showMaxSmall(screenType) &&
                <LargeColumn className="justify-content-center align-self-center">
                    {data.map(item =>
                        <JobCard
                            key={item.id}
                            title={item.contract}
                            paragraph={item.description}
                            image={item.img}
                            to={item.to}/>
                    )}
                </LargeColumn>
                }
                <SmallColumn className="justify-content-center align-self-center">
                    <HeaderTwo title={info.title}/>
                    <Paragraph text={info.paragraph}/>
                    <StyledLink to={info.to}>
                        <PrimaryButton className="">{info.buttonTitle}</PrimaryButton>
                    </StyledLink>
                </SmallColumn>
            </DefaultSectionContainer>
        </JobsWrapper>
    );
};

Jobs.propTypes = {
    screenType: PropTypes.string.isRequired
};

export default Jobs;