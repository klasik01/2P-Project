import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import backgroundImg from '../../images/bg-8.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../../images/logoBrandNegativ.png';


const BannerWrapper = styled(Row)`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg}) ;
    background-size: cover;
    margin: 0;
    border-radius: 0;
    min-height: 100vh;
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
                {/*<div className="text-center">*/}
                {/*    <TitleHeader className="py-4 my-auto">*/}
                {/*        <h1 className="display-1">Pavel Pinkas</h1>*/}
                {/*        <h2 className="display-4">2P Stavební</h2>*/}
                {/*        <h3 className="display-5"><FontAwesomeIcon className="fas" icon="phone"/> +420 606 060 606</h3>*/}
                {/*    </TitleHeader>*/}
                {/*</div>*/}
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