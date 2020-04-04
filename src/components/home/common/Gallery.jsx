import React from 'react';
import styled from 'styled-components';
import { PrettyHeader } from '../../common/Typography';
import { Row } from 'reactstrap';

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
                <div className="row" id="gallery" data-toggle="modal" data-target="#exampleModal">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <img className="w-100" src="https://unsplash.it/600.jpg?image=251" data-target="#carouselExample" data-slide-to="0" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <img className="w-100" src="https://unsplash.it/600.jpg?image=251" data-target="#carouselExample" data-slide-to="1" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <img className="w-100" src="https://unsplash.it/600.jpg?image=254" data-target="#carouselExample" data-slide-to="2" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <img className="w-100" src="https://unsplash.it/600.jpg?image=252" data-target="#carouselExample" data-slide-to="3" />
                    </div>
                </div>
            </div>  
        </Wrapper>
    )
}

export default Gallery;