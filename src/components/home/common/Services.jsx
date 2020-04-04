import React from 'react';
import {PrettyHeader} from '../../common/Typography';
import data from '../../../data/services.json';
import Service from '../../common/Service';
import Lightbox from '../../common/Lightbox';
import {Container} from 'reactstrap';
import styled from 'styled-components';


const Wrapper = styled(Container)`
`;

const Services = (props) => {

    return (
        <Wrapper className="text-center py-5">
            <PrettyHeader>služby</PrettyHeader>
            <div className="row">
            {
                data
                    .filter(item => item.category === 'SERVICE')
                    .map(item => {
                        const {icon, header, col, text, id, color = 'white'} = item;
                        return <Service key={id} icon={icon} header={header} col={col} text={text} color={color}/>
                    })
            }
            </div>
        </Wrapper>
    )
};

export default Services;