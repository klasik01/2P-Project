import React from 'react';
import styled from 'styled-components';
import { PrettyHeader } from '../../../common/PretyHeader';
import {
    Row
} from 'reactstrap';

const Wrapper = styled.div`
`;

const Margin = styled(Row)`
    margin: 15px;
`;


const Gallery = (props) => {

    return (
        <Wrapper className="text-center">
            <PrettyHeader>Gallery</PrettyHeader>
            <div className="container">
                <Margin className="">
                    <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=251" className="img-fluid rounded" alt="" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=252" className="img-fluid rounded" alt="" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid rounded" alt="" />
                    </a>
                </Margin>
                <Margin className="">
                    <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=254" className="img-fluid rounded" alt="" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=255" className="img-fluid rounded" alt="" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=256" className="img-fluid rounded" alt="" />
                    </a>
                </Margin>
            </div>
        </Wrapper>
    )
}

export default Gallery;