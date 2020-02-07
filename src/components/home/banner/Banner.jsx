import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const BannerWrapper = styled(Row)`
    background: linear-gradient(to right, #f2eb86, #b37d17);
    margin: 0;
    border-radius: 0;
    min-height: 60vh;
`;

const TitleHeader = styled.div`
    color: white;
    padding: 0;
`;

const Banner = (props) => {

    return (
        <BannerWrapper className="align-items-center">
            <Col className="">
                <div className="text-center">
                    <TitleHeader className="py-4 my-auto">
                        <h1 className="display-1">2P Stavební</h1>
                        <span className="display-4">Pavel Pinkas</span>
                    </TitleHeader>
                </div>
            </Col>
        </BannerWrapper>
    );
}

export default Banner;