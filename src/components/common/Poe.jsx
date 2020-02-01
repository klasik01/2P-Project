import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PrimaryButton } from './Button';

const Wrapper = styled.footer`
    h1 {
        font-size: 1.5rem;
        padding-top: 10px;
    }
`;


const Poe = (props) => {

    const { paragraphs, header } = props;

    return (
        <Wrapper className="text-center">
            <h1 className="">{header}</h1>
            {
                paragraphs.map((item, index) => {
                    return <p className="font-italic" key={index}>{item}</p>
                })
            }
            <PrimaryButton href="#poe">Zjistit více</PrimaryButton>
        </Wrapper>
    )
}

Poe.protoTypes = {
    header: PropTypes.string.isrequired,
    paragraphs: PropTypes.array.isrequired,
}

export default Poe;