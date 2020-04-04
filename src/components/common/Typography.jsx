import styled from 'styled-components';
import React from "react";
import PropTypes from 'prop-types';

export const PrettyHeader = styled.h1`
    margin-top:2em;
    margin-bottom: 2em;
    font: 1.5rem sans-serif;
    text-transform: uppercase;
    padding-top: 10px;
    line-height: 1;
    display: table;
    white-space: nowrap;
    &:before, &:after {
        border-top: 1px solid black;
        content: '';
        display: table-cell;
        position: relative;
        top: 0.5em;
        width: 50%;
    }
    &:before { right: 1.5%; }
    &:after { left: 1.5%; }
`;

export const HeaderTwo = (props) => {
    const {title} = props;
    return (<div className="py-2"><h2>{title}</h2></div>);
};

HeaderTwo.propTypes = {
    title: PropTypes.string.isRequired
};

export const Paragraph = (props) => {
    const {text} = props;
    return (<div className="text my-4">{text}</div>);
};

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
};



