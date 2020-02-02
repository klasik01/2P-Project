import React, { useState } from 'react';
import styled from 'styled-components';

import {
    CarouselItem,
    CarouselCaption,
    UncontrolledCarousel,
    Container
} from 'reactstrap';

import items from '../../data/banner.json';


const BannerWrapper = styled(Container)`
    z-index: 100;
`;

const Slider = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <BannerWrapper>
                <CarouselItem className="img-fluid"
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            </BannerWrapper>
        );
    });

    return (
        <BannerWrapper>
            <BannerWrapper className="">
                <UncontrolledCarousel items={items} />
            </BannerWrapper>
        </BannerWrapper>
    );

}

export default Slider;