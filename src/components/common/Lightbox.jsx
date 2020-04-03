import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import styled from 'styled-components';
import {Row} from 'reactstrap';

import "react-image-lightbox/style.css";

const images = {
  "1": [
    "//unsplash.it/1200/768.jpg?image=251",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500"
  ],
  "2": [
    "//placekitten.com/1000/1200",
    "//placekitten.com/600/1000",
    "//placekitten.com/800/1200"
  ]
};

const lighboxes = ["1", "2"];

const LightBox = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="App">
      {lighboxes.map(item => (
        <div>
          <Margin className="">
                    <a href="https://unsplash.it/1200/768.jpg?image=251" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=251" className="img-fluid rounded" alt="" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=252" className="img-fluid rounded" alt="" />
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                        <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid rounded" alt="" />
                    </a>
                </Margin>
          <button type="button" key={item} onClick={() => setIsOpen(item)}>
            Open Lightbox {item}
          </button>
        </div>
      ))}
      {!!isOpen && (
        <Lightbox
          mainSrc={images[isOpen][photoIndex]}
          nextSrc={images[isOpen][(photoIndex + 1) % images[isOpen].length]}
          prevSrc={
            images[isOpen][
              (photoIndex + images[isOpen].length - 1) % images[isOpen].length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + images[isOpen].length - 1) % images[isOpen].length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images[isOpen].length)
          }
        />
      )}
    </div>
  );
}

const Margin = styled(Row)`
    margin: 15px;
`;

export default LightBox;