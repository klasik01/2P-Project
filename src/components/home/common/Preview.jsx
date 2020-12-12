import React from 'react';
import {Paragraph, PrettyHeader} from '../../common/Typography';
import PropTypes from 'prop-types';
import {PRIMARY} from '../../../theme/colors';
import styled from 'styled-components';

const DefaultSection = styled.section`
    color: white;
    padding: 0 20px;
    background: ${PRIMARY};
    clip-path: polygon(${props => props.polygon ? '0 10%, 100% 0, 100% 90%, 0 100%' : '0 0, 0 100%, 100% 100%, 100% 0'});
`;

const Preview = (props) => {

    const {info} = props;

    return (
        <DefaultSection className="py-5" background={false} polygon={false}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-center">
                        <div className="">
                            <PrettyHeader>{info.title}</PrettyHeader>
                            <Paragraph style={{fontSize: '20px'}} text={info.text}/>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultSection>
    );
};

Preview.propTypes = {
    info: PropTypes.object.isRequired
};

export default Preview;