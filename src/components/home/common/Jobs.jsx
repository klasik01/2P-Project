import React from 'react';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import styled from 'styled-components';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {LinkCard} from '../../common/Card';
import {PrimaryButton} from '../../common/Button';

const JobsWrapper = styled.div`
`;

const Jobs = () => {
    return (
        <JobsWrapper className="text-center">
            <DefaultSectionContainer>
                <LargeColumn>
                    {[1, 2].map(item =>
                        <LinkCard
                            key={item}
                            title="Dělník pozice"
                            paragraph="Lorem ipsum dolor amet contur adip isicing elit sed eiusm"
                            icon="hammer"
                            to="/"/>
                    )}
                </LargeColumn>
                <SmallColumn>
                    <HeaderTwo title="Hledáš práci?"/>
                    <Paragraph text="Máme trvalý zájem o spolupráci s novými zaměstnanci, kteří jsou
                        odborníky ve svém oboru, chtějí se trvale rozvíjet a patřit společně s námi ke špičce
                        stavební profese."/>
                    <PrimaryButton href="#">Seznam volných pozic</PrimaryButton>
                </SmallColumn>
            </DefaultSectionContainer>
        </JobsWrapper>
    );
};

export default Jobs;