import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from 'reactstrap';
import PropTypes from 'prop-types';

const BannerWrapper = styled(Row)`
    padding-top: 80px;
    background: linear-gradient(to right, #f2eb86, #b37d17);
    margin: 0;
    border-radius: 0;
`;

const TitleHeader = styled.div`
    color: white;
    padding: 0;
`;

export const BannerHeader = (props) => {

    const {header} = props;
    return (
        <BannerWrapper className="align-items-center">
            <Container>
                <Col className="">
                    <div className="">
                        <TitleHeader className="py-4 my-auto">
                            <h1 className="display-4">{header}</h1>
                        </TitleHeader>
                    </div>
                </Col>
            </Container>
        </BannerWrapper>
    );
};

BannerHeader.propsTypes = {
    header: PropTypes.string.isRequired
};
