import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BUTTON_PRIMARY_1, BUTTON_PRIMARY_2, BUTTON_SECONDARY_1, BUTTON_SECONDARY_2} from '../../theme/colors';

const Button = styled.a`
    background: ${props => props.color1};
    color: ${props => props.color2};
    border: 2px solid ${props => props.color1};

    &&:hover {
        color: ${props => props.color1};
        background: ${props => props.color2};
    }

`;

/*const LongButtonStyle = styled.a`
    color: ${PRIMARY};
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-decoration: none;
    text-underline: none;
    &:hover {
      background: ${PRIMARY};
      color: white;
      text-decoration: none;
    }
`;*/

export const PrimaryButton = (props) => {

    const {href, children} = props;

    return (
        <Button href={href} className="btn rounded-0" color1={BUTTON_PRIMARY_1}
                color2={BUTTON_PRIMARY_2}>{children}</Button>
    )
}

export const SecondaryButton = (props) => {

    const {href, children} = props;

    return (
        <Button href={href} className="btn" color={BUTTON_SECONDARY_1} color2={BUTTON_SECONDARY_2}>{children}</Button>
    )
}

export const LongButton = (props) => {
    const {href, children} = props;

    return (
        <Button href={href}
                className="btn bg-warning d-flex rounded-0 justify-content-center py-2 font-weight-bold"
                color={BUTTON_PRIMARY_1}
                color2={BUTTON_PRIMARY_2}>
            {children}
        </Button>
    )
}

PrimaryButton.propTypes = {
    href: PropTypes.string.isRequired,
}