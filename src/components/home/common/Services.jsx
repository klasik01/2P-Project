import React from 'react';
import { PrettyHeader } from '../../common/Typography';
import styled from 'styled-components';
import { FullColumn } from '../../common/BlockLayout';
import { TopIconBottomText } from '../../common/Card';
import PropTypes from 'prop-types';
import { PrimaryButton, StyledLink } from "../../common/Button";

const DefaultSection = styled.section`
  padding: 0 20px;
  background: white;
  clip-path: polygon(${props => props.polygon ? '0 10%, 100% 0, 100% 90%, 0 100%' : '0 0, 0 100%, 100% 100%, 100% 0'});
`;

const Services = (props) => {
    const { screenType, data = [], info } = props;

    return (
        <DefaultSection className="py-5" background={false} polygon={false}>
            <div className="container">
                <div className="row">
                    <FullColumn>
                        <div className="col text-center">
                            <PrettyHeader>{info.title}</PrettyHeader>
                        </div>
                    </FullColumn>
                    <div className={'col'}>
                        <div className="row clearfix">
                            {data.map(item =>
                                <TopIconBottomText
                                    id={item.key}
                                    key={item.key}
                                    title={item.title}
                                    paragraph={item.paragraph}
                                    icon={item.icon}
                                    screenType={screenType}
                                />
                            )}
                        </div>
                    </div>
                    <FullColumn>
                        <div className="col text-center">
                            <StyledLink to={info.ref}>
                                <PrimaryButton inverse className="my-2">{info.buttonTitle}</PrimaryButton>
                            </StyledLink>
                        </div>
                    </FullColumn>
                </div>
            </div>
        </DefaultSection>
    );
};

Services.propTypes = {
    screenType: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    info: PropTypes.object.isRequired,
};

export default Services;
