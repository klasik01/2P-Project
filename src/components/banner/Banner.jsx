import React, { useState } from 'react';
import styled from 'styled-components';

import background from '../../images/bg-1.jpg';

import {
    Jumbotron
} from 'reactstrap';


const BannerWrapper = styled(Jumbotron)`
    margin-top: -53px;
    z-index: 100;
    background: url(${background});
    height: 50vh;
`;

const TitleHeader = styled.div`
    color: white;
`;

const Banner = (props) => {

    return (
        <BannerWrapper>
            <div className=" d-flex align-items-center h-100">
                <div className="container text-center">
                    <TitleHeader>
                        <h1 className="display-3">2P Stavební</h1>
                        <span className="display-5">Pavel Pinkas</span>
                    </TitleHeader>
                </div>
            </div>
        </BannerWrapper>
    );
}

export default Banner;