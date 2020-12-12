import React from 'react';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {PrimaryButton, StyledLink} from '../../common/Button';
import PropTypes from 'prop-types';

const AboutInfo = (props) => {

    const {offer, about} = props;

    return (
        <div>
            <DefaultSectionContainer isBackground>
                <SmallColumn>
                    <HeaderTwo title={offer.title}/>
                    <Paragraph text={offer.text}/>
                    <StyledLink to={offer.ref}>
                        <PrimaryButton inverse className=" my-2">{offer.buttonTitle}</PrimaryButton>
                    </StyledLink>
                </SmallColumn>
                <LargeColumn className="">
                    <div className="col">
                        <HeaderTwo title={about.title}/>
                        {about.text.map((item, index) => <Paragraph key={index} text={item}/>)}
                        <StyledLink to={about.ref}>
                            <PrimaryButton inverse className="my-2">{about.buttonTitle}</PrimaryButton>
                        </StyledLink>
                    </div>
                </LargeColumn>
            </DefaultSectionContainer>
        </div>
    );
};

AboutInfo.propTypes = {
    offer: PropTypes.object.isRequired,
    about: PropTypes.object.isRequired,
};

export default AboutInfo;