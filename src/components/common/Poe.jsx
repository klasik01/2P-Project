import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PrimaryButton } from './Button';
import { Container } from 'reactstrap';
import { PrettyHeader } from './PretyHeader';
import { PRIMARY } from '../../theme/colors';

const Wrapper = styled.div`
    background: ${PRIMARY} ;
    clip-path: polygon(0% 20%, 0% 100%, 100% 80%, 100% 0%);
`;

const WrapperContainer = styled(Container)`
`;

const Poe = (props) => {

    const { paragraphs, header } = props;

    return (
        <Wrapper className="text-center py-5 my-5">
            <WrapperContainer>
                <PrettyHeader className="">{header}</PrettyHeader>
                {
                    paragraphs.map((item, index) => {
                        return <p className="font-italic" key={index}>{item}</p>
                    })
                }
                <PrimaryButton href="#poe">Zjistit více</PrimaryButton>
            </WrapperContainer>
        </Wrapper>
    )
};

Poe.protoTypes = {
    header: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
};

export default Poe;