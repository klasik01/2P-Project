import React from 'react';
import {PrettyHeader} from '../../common/Typography';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {DefaultSectionContainer, FullColumn} from '../../common/BlockLayout';
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
                <FullColumn>
                    <div className="col text-center">
                        <PrettyHeader>{info.title}</PrettyHeader>
                    </div>
                </FullColumn>
                {!showMaxSmall(screenType) &&
                <div className={'col'}>
                    <div className="row clearfix">
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
                    </div>
                </div>
                }
            </DefaultSectionContainer>
        </Wrapper>
    );
};

Services.propTypes = {
    screenType: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    info: PropTypes.object.isRequired,
};

export default Services;