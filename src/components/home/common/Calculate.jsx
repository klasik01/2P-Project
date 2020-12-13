import React from 'react';
import {Paragraph, PrettyHeader} from '../../common/Typography';
import PropTypes from 'prop-types';
import {PRIMARY} from '../../../theme/colors';
import styled from 'styled-components';
import { PrimaryButton, StyledLink } from "../../common/Button";

const DefaultSection = styled.section`
    color: ${PRIMARY};
    padding: 0 20px;
    background: white;
    clip-path: polygon(${props => props.polygon ? '0 10%, 100% 0, 100% 90%, 0 100%' : '0 0, 0 100%, 100% 100%, 100% 0'});
`;

const Calculate = (props) => {

    const {info} = props;

    return (
        <DefaultSection className="py-5" background={false} polygon={false}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-center">
                        <div className="">
                            <PrettyHeader>{info.title}</PrettyHeader>
                            <Paragraph style={{fontSize: '20px'}} text={info.text}/>
                            <StyledLink to={info.ref}>
                                <PrimaryButton inverse className="my-2">{info.buttonTitle}</PrimaryButton>
                            </StyledLink>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultSection>
    );
};

Calculate.propTypes = {
    info: PropTypes.object.isRequired
};

export default Calculate;
