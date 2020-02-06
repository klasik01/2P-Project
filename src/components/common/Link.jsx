import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';
import {LongButton} from "./Button";

const Wrapper = styled(Col)`
`;


export const Link = (props) => {
    const {icon = 'closed-captioning', header = 'UNKNOWN', link = '/', alias = "...", col = 4, color} = props;
    return (
        <Wrapper className="py-2" md={col}>
            <LongButton className=""
                        href={link}>{header}</LongButton>
        </Wrapper>
    )
}

Link.protoTypes = {
    icon: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
}

