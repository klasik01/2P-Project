import React from 'react';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {PrimaryButton, StyledLink} from '../../common/Button';
import {showMaxSmall, showMinLarge} from '../../../utils/screenType';
import {TopIconBottomText} from '../../common/Card';
import PropTypes from 'prop-types';

const Wrapper = styled(Container)`
`;

const Services = (props) => {
    const {screenType, data = [], info} = props;

    return (
        <Wrapper className="">
            <DefaultSectionContainer>
                <SmallColumn>
                    <HeaderTwo title={info.title}/>
                    <Paragraph text={info.paragraph}/>
                    <StyledLink to={`/${info.to}`} className="d-flex justify-content-center">
                        <PrimaryButton className="d-flex justify-content-end">{info.buttonTitle}</PrimaryButton>
                    </StyledLink>
                </SmallColumn>
                {!showMaxSmall(screenType) &&
                <LargeColumn className={`${showMaxSmall(screenType) ? 'd-flex justify-content-center flex-wrap' : ''}`}>
                    {data.map(item => showMinLarge(screenType) ?
                        <TopIconBottomText
                            key={item.key}
                            id={item.key}
                            title={item.title}
                            paragraph={item.paragraph}
                            icon={item.icon}/> :
                        <TopIconBottomText
                            id={item.key}
                            key={item.key}
                            title={item.title}
                            paragraph={item.paragraph}
                            icon={item.icon}
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