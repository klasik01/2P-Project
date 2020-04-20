import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from 'reactstrap';
import PropTypes from 'prop-types';
import backgroundImg from '../../images/bg-3.jpg';

const BannerWrapper = styled(Row)`
    padding-top: 80px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg});
    background-size: cover;
    margin: 0;
    border-radius: 0;
`;

const TitleHeader = styled.div`
    color: white;
    padding: 0;
`;

export const BannerHeader = (props) => {
    return (
        <BannerWrapper className="align-items-center">
            <Container>
                <Col className="">
                    <div className="">
                        <TitleHeader className="py-4 my-auto">
                            <h1 className="display-4">{props.header}</h1>
                        </TitleHeader>
                    </div>
                </Col>
            </Container>
        </BannerWrapper>
    );
};

BannerHeader.propTypes = {
    header: PropTypes.string.isRequired
};
