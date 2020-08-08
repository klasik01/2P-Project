import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {BUTTON_PRIMARY_1, BUTTON_PRIMARY_2, BUTTON_SECONDARY_1, BUTTON_SECONDARY_2} from '../../theme/colors';
import {Link} from 'react-router-dom';

const Button = styled.button`
    background: ${props => props.color2};
    color: ${props => props.color1};
    border: 2px solid ${props => props.color1};

    &&:hover {
        color: ${props => props.color2};
        background: ${props => props.color1};
    }
`;

const ButtonInverse = styled.button`
    background: ${props => props.color1};
    color: ${props => props.color2};
    border: 2px solid ${props => props.color1};

    &&:hover {
        color: ${props => props.color1};
        background: ${props => props.color2};
        border: 2px solid ${props => props.color1};
    }
`;

export const PrimaryButton = (props) => {
    const {children, inverse = false, className} = props;
    if (!inverse) {
        return (
            <Button
                className={`btn rounded-0 ${className}`} color1={BUTTON_PRIMARY_1}
                color2={BUTTON_PRIMARY_2}>{children}</Button>
        );
    } else {
        return (
            <ButtonInverse
                className={`btn rounded-0 ${className}`} color1={BUTTON_PRIMARY_1}
                color2={BUTTON_PRIMARY_2}>{children}</ButtonInverse>
        );
    }
};

export const SecondaryButton = (props) => {
    const {children, inverse = false, className} = props;
    if (!inverse) {
        return (
            <Button
                className={`btn rounded-0 ${className}`} color1={BUTTON_SECONDARY_1}
                color2={BUTTON_SECONDARY_2}>{children}</Button>
        );
    } else {
        return (
            <ButtonInverse
                className={`btn ${className}`} color1={BUTTON_SECONDARY_2}
                color2={BUTTON_SECONDARY_1}>{children}</ButtonInverse>
        );
    }
};

PrimaryButton.propTypes = {
    className: PropTypes.string,
    inverse: PropTypes.bool
};

SecondaryButton.propTypes = {
    className: PropTypes.string,
    inverse: PropTypes.bool
};

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;