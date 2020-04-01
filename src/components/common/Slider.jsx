import React from 'react';
import styled from 'styled-components';

import {Container, UncontrolledCarousel} from 'reactstrap';

import items from '../../../data/banner.json';


const BannerWrapper = styled(Container)`
    z-index: 100;
`;

const Slider = (props) => {

    return (
        <BannerWrapper>
            <BannerWrapper className="">
                <UncontrolledCarousel items={items}/>
            </BannerWrapper>
        </BannerWrapper>
    );

}

export default Slider;