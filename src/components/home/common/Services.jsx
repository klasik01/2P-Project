import React from 'react';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {PrimaryButton} from '../../common/Button';
import {showMaxSmall, showMinLarge} from '../../../utils/screenType';
import {LeftIconRightTextCard, TopIconBottomText} from '../../common/Card';
import PropTypes from 'prop-types';

const Wrapper = styled(Container)`
`;

const Services = (props) => {
    const { screenType} = props;
    return (
        <Wrapper className="">
            <DefaultSectionContainer>
                <SmallColumn>
                    <HeaderTwo title="Kdo jsme?"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                        officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error
                        sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab
                        illo inventore veritatis quasi architebeatae. vitae"/>
                    <PrimaryButton className="d-flex justify-content-end" href="#">Více informací</PrimaryButton>
                </SmallColumn>
                {!showMaxSmall(screenType) &&
                <LargeColumn className={`${showMaxSmall(screenType) ? 'd-flex justify-content-center flex-wrap' : ''}`}>
                    {[1, 2, 3, 4, 5, 6].map(item => showMinLarge(screenType) ?
                        <LeftIconRightTextCard
                            key={item}
                            title="Služba 1"
                            paragraph="Lorem ipsum dolor amet contur adip isicing elit sed eiusm"
                            icon="hammer"/> :
                        <TopIconBottomText
                            key={item}
                            title="Stavební práce"
                            paragraph={`${item % 2 === 0 ? 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm' : 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm Lorem ipsum dolor amet contur adip isicing elit sed eiusm'}`}
                            icon="hammer"
                            screenType={screenType}
                        />
                    )}
                </LargeColumn>
                }
            </DefaultSectionContainer>
        </Wrapper>
    );
};

Services.propTypes = {
    screenType: PropTypes.string.isRequired
};

export default Services;