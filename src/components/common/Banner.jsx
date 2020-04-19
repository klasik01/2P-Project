import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import backgroundImg from '../../images/bg-3.jpg';
import {PRIMARY, PRIMARY_TO} from '../../theme/colors';
import logo from '../../images/logo.png';

const BannerWrapper = styled(Row)`
    background-image: /*linear-gradient(to right, ${PRIMARY + '80'}, ${PRIMARY_TO + '80'}),*/ url(${backgroundImg}) ;
    background-size: cover;
    margin: 0;
    border-radius: 0;
    min-height: 100vh;
    //clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5));
`;

const TitleHeader = styled.div`
    color: white;
    padding: 0;
`;

const Banner = () => {
    return (
        <BannerWrapper className="align-items-center">
            <Col className="">
                <div className="text-center">
                    <TitleHeader className="py-4 my-auto">
                        <div><img className="w-50 img-fluid d-block mx-auto" src={logo} alt="2P Stavební"/> </div>
                    </TitleHeader>
                </div>
            </Col>
        </BannerWrapper>
    );
};

export default Banner;