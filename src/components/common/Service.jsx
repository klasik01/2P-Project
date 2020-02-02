import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';

const Wrapper = styled(Col)`
`;

const IconWrapper = styled.span`
    color: ${props => props.color};
`;

const Service = (props) => {

    const { icon = 'closedCaptioning', header = 'UNKNOWN', text = 'text...', col = 4, color } = props;

    return (
        <Wrapper md={col}>
            <IconWrapper className="fa-stack fa-4x" color={color}>
                <FontAwesomeIcon className="fas text-warning fa-stack-2x" icon="circle" />
                <FontAwesomeIcon className="fas  fa-stack-1x" icon={icon} />
            </IconWrapper>
            <h4 className="service-heading">{header}</h4>
            <p className="text-muted">{text}</p>
        </Wrapper>
    )
}

Service.protoTypes = {
    icon: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
}

export default Service;