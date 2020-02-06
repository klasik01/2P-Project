import React from 'react';
import {PrettyHeader} from '../../common/PretyHeader';
import data from '../../../data/jobs.json';
import {Link} from '../../common/Link';
import styled from "styled-components";
import {Row} from "reactstrap";

const JobsWrapper = styled(Row)`
    color: ${props => props.color};
`;


const Jobs = (props) => {

    return (
        <JobsWrapper className="text-center">
            <PrettyHeader>zaměstnání</PrettyHeader>
            {
                data.filter(item => item.category === 'JOB')
                    .map(item => {
                        const {icon, header, col, alias, link, id, color = 'white'} = item;
                        return <Link key={id} icon={icon} header={header} col={col} link={link} alias={alias}
                                     color={color}/>
                    })
            }
        </JobsWrapper>
    )
}

export default Jobs;