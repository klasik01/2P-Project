import React from 'react';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import styled from 'styled-components';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {PrimaryButton, SecondaryButton, StyledLink} from '../../common/Button';
import workerMisterImg from '../../../images/worker-mister.svg';
import workerWorkerImg from '../../../images/worker-svg.svg';
import PropTypes from 'prop-types';
import {showMaxSmall} from '../../../utils/screenType';

const JobsWrapper = styled.div`
`;

const jobsInfoData = {
    'title': 'Hledáš práci?',
    'paragraph': 'Máme trvalý zájem o spolupráci s novými zaměstnanci, kteří jsou odborníky ve svém oboru, chtějí se trvale rozvíjet a patřit společně s námi ke špičce stavební profese.',
    'buttonTitle': 'Seznam volných pozic',
    'to': 'jobs'
};

const jobsData = [
    {
        'id': 1,
        'contract': 'Pozice Dělník',
        'description': 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm',
        'img': workerWorkerImg,
        'icon': '',
        'to': '/jobs/1'
    }, {
        'id': 2,
        'contract': 'Pozice Mistr',
        'description': 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm',
        'img': workerMisterImg,
        'icon': 'hammer',
        'to': '/jobs/2'
    }
];

const BlockWrapper = styled.div`
`;

const BlockItem = styled.div`
`;

const BlockLink = styled.div`
`;

export const JobCard = (props) => {
    const {image, title, to} = props;
    return (
        <BlockWrapper backgroundImage={image} className="col-md-6 col-sm-12">
            <BlockItem className="p-4 my-2 text-center">
                <div>
                    <img src={image} className="img-fluid w-75" alt="item"/>
                </div>
                <BlockLink>
                    <StyledLink to={to} >
                        <SecondaryButton className="btn-block my-2">{title}</SecondaryButton>
                    </StyledLink>
                </BlockLink>
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
    const {screenType} = props;
    return (
        <JobsWrapper className="text-center">
            <DefaultSectionContainer>
                {!showMaxSmall(screenType) &&
                <LargeColumn className="justify-content-center align-self-center">
                    {jobsData.map(item =>
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
                    <HeaderTwo title={jobsInfoData.title}/>
                    <Paragraph text={jobsInfoData.paragraph}/>
                    <StyledLink to={jobsInfoData.to}>
                        <PrimaryButton className="">{jobsInfoData.buttonTitle}</PrimaryButton>
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