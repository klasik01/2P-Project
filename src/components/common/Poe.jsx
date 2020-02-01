import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.footer``;


const Poe = (props) => {

    const { paragraphs, header } = props;

    return (
        <Wrapper className="">
            <h1>{header}</h1>
            <hr />
            {
                paragraphs.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        </Wrapper>

    )
}

Poe.protoTypes = {
    header: PropTypes.string.isrequired,
    paragraphs: PropTypes.array.isrequired,
}

export default Poe;