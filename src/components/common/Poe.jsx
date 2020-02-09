import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PrimaryButton} from './Button';
import {PrettyHeader} from './PretyHeader';

const Wrapper = styled.div`
`;

const Poe = (props) => {

    const {paragraphs, header} = props;

    return (
        <Wrapper className="text-center">
            <PrettyHeader className="">{header}</PrettyHeader>
            {
                paragraphs.map((item, index) => {
                    return <p className="font-italic" key={index}>{item}</p>
                })
            }
            <PrimaryButton href="#poe">Zjistit více</PrimaryButton>
        </Wrapper>
    )
};

Poe.protoTypes = {
    header: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
};

export default Poe;