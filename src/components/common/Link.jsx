import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';
import {LongButton} from "./Button";

const Wrapper = styled(Col)`
`;


export const Link = (props) => {
    const {header = 'UNKNOWN', link = '/', col = 4} = props;
    return (
        <Wrapper className="py-2" md={col}>
            <LongButton className=""
                        href={link}>{header}</LongButton>
        </Wrapper>
    )
};

Link.protoTypes = {
    header: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
};

