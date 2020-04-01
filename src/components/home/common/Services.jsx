import React from 'react';
import {PrettyHeader} from '../../common/PretyHeader';
import data from '../../../data/services.json';
import Service from '../../common/Service';


const Services = (props) => {

    return (
        <div className="text-center">
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
        </div>
    )
};

export default Services;