import React from 'react';
import styled from 'styled-components';
import background from '../../../images/bg-1.jpg';
import {Jumbotron} from 'reactstrap';

const BannerWrapper = styled(Jumbotron)`
    background: linear-gradient(to right, #f2eb86, #b37d17);
    margin-top: -10px;
`;

const TitleHeader = styled.div`
    color: white;
`;

const Banner = (props) => {

    return (
        <BannerWrapper>
            <div className=" d-flex align-items-center h-100">
                <div className="container text-center">
                    <TitleHeader className="py-2">
                        <h1 className="display-2">2P Stavební</h1>
                        <span className="display-4">Pavel Pinkas</span>
                    </TitleHeader>
                </div>
            </div>
        </BannerWrapper>
    );
}

export default Banner;