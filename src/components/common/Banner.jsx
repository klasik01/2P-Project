import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import backgorundImg from '../../images/bg-3.jpg';


const BannerWrapper = styled(Row)`
    background: linear-gradient(to right, #f2eb86, #b37d17);
/*     filter: contrast(8);
 */    background-image: linear-gradient(to right, rgba(168, 58, 50, 0.8), rgba(191, 106, 99,0.8)), url(${backgorundImg}) ;
    background-size: cover;
    margin: 0;
    border-radius: 0;
    min-height: 60vh;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
/*     clip-path: ellipse(100% 55% at 48% 44%);*/    
    filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5));
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