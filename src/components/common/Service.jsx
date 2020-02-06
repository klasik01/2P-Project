import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'reactstrap';
import {PRIMARY} from "../../theme/colors";

const Wrapper = styled(Col)`
`;

const IconWrapper = styled.span`
    color: ${props => props.color};
`;

const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${PRIMARY};
`;

const Service = (props) => {

    const { icon = 'closedCaptioning', header = 'UNKNOWN', text = 'text...', col = 4, color } = props;

    return (
        <Wrapper md={col}>
            <IconWrapper className="fa-stack fa-4x" color={color}>
                <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle" />
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