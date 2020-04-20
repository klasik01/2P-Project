import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

export const PrettyHeader = styled.h1`
    text-transform: uppercase;
    font-weight:700;
`;

export const HeaderTwo = (props) => {
    const {title} = props;
    return (<div className="py-2"><h2 className="font-weight-bold">{title}</h2></div>);
};

HeaderTwo.propTypes = {
    title: PropTypes.string.isRequired
};

export const Paragraph = (props) => {
    const {text} = props;
    return (
        <div className="text my-4">{text}</div>
    );
};

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
};



