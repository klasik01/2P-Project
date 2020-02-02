import React from 'react';
import styled from 'styled-components';
import { PrettyHeader } from '../../common/PretyHeader';
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
            <div class="container">
                <Margin class="">
                    <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid rounded" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid rounded" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid rounded" />
                    </a>
                </Margin>
                <Margin class="">
                    <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=254" class="img-fluid rounded" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=255" class="img-fluid rounded" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=256" class="img-fluid rounded" />
                    </a>
                </Margin>
            </div>
        </Wrapper>
    )
}

export default Gallery;