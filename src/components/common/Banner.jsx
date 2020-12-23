import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import backgroundImg from '../../images/bg-8.jpg';
//import logo from '../../images/logoBrandNegativ.png';
import logo from '../../images/logo.png';

import basicData from '../../data/website.json';
import useScreenType from "../../utils/screenType";

const BannerWrapper = styled(Row)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg});
  background-size: cover;
  margin: 0;
  border-radius: 0;
  min-height: 100vh;
`;

const TitleHeader = styled.div`
  color: white;
  padding: 0;
`;

const Banner = () => {

    if (useScreenType() === 'xs') {
        return (
            <BannerWrapper className="pt-5 mt-5">
                <Col className="">
                    <div className="text-center">
                        <TitleHeader className="py-4 my-auto">
                            <div><img className="w-50  d-block mx-auto" src={logo} alt={basicData.title}/>
                            </div>
                        </TitleHeader>
                    </div>
                </Col>
            </BannerWrapper>
        );
    }
    return (
        <BannerWrapper className="align-items-center">
            <Col className="">
                <div className="text-center">
                    <TitleHeader className="py-4 my-auto">
                        <div><img className="w-50 img-fluid d-block mx-auto" src={logo} alt={basicData.title}/></div>
                    </TitleHeader>
                </div>
            </Col>
        </BannerWrapper>
    );
};

export default Banner;
