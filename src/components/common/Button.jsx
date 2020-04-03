import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BUTTON_PRIMARY_1, BUTTON_PRIMARY_2, BUTTON_SECONDARY_1, BUTTON_SECONDARY_2 } from '../../theme/colors';

const Button = styled.a`
    background: ${props => props.color2};
    color: ${props => props.color2};
    border: 2px solid ${props => props.color1};

    &&:hover {
        color: ${props => props.color2};
        background: ${props => props.color1};
    }
`;

const ButtonInverse = styled.a`
    background: ${props => props.color2};
    color: ${props => props.color1};
    border: 2px solid ${props => props.color2};

    &&:hover {
        color: ${props => props.color2};
        background: ${props => props.color1};
    }
`;

export const PrimaryButton = (props) => {
    const { href, children, inverse } = props;
    if (!inverse) {
        return (
            <Button href={href} className="btn rounded-0" color1={BUTTON_PRIMARY_1}
                color2={BUTTON_PRIMARY_2}>{children}</Button>
        )
    } else {
        return (<ButtonInverse href={href} className="btn rounded-0" color1={BUTTON_PRIMARY_2}
            color2={BUTTON_PRIMARY_1}>{children}</ButtonInverse>)
    }
}

export const SecondaryButton = (props) => {
    const { href, children, inverse = false } = props;
    if (!inverse) {
        return (
            <Button href={href} className="btn rounded-0" color1={BUTTON_SECONDARY_1}
                color2={BUTTON_SECONDARY_2}>{children}</Button>
        )
    } else {
        return (<ButtonInverse href={href} className="btn" color1={BUTTON_SECONDARY_2}
            color2={BUTTON_SECONDARY_1}>{children}</ButtonInverse>)
    }
}

PrimaryButton.propTypes = {
    href: PropTypes.string.isRequired,
    inverse: PropTypes.bool
}

SecondaryButton.propTypes = {
    href: PropTypes.string.isRequired,
    inverse: PropTypes.bool
}