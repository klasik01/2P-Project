import React, {useState} from 'react';
import {ArticleLayout} from '../../../common/Layout';
import {Col, Row} from 'reactstrap';
import jobsData from '../../../../data/jobs.json';
import textsData from '../../../../data/texts.json';

const Jobs = () => {

    const [data] = useState(jobsData['DETAIL']);
    const [texts] = useState(textsData['JOB']);

    return (
        <ArticleLayout header={texts.title} footer="">
            <h2 className="border-bottom border-danger font-weight-bold">{texts.par[0]}</h2>
            <Row>
                {data.map(item =>
                    <Col md={5} key={item.id} className="m-1 card card-body bg-light">
                        <h3 className="font-weight-bold">{item.contract}</h3>
                        {item.sections.map(data => <div key={data.id}>
                            <h4>{data.title}</h4>
                            <ul>
                                {data.list.map((listItem, index) => <li key={data.id + '-' + index}>{listItem}</li>)}
                            </ul>
                        </div>)}
                    </Col>
                )}
            </Row>
        </ArticleLayout>
    );
};


export default Jobs;