import React, {useState} from 'react';
import {ArticleLayout} from '../../../common/Layout';
import {Col} from 'reactstrap';
import jobsData from '../../../../data/jobs.json';
import textsData from '../../../../data/texts.json';
import {Hr} from '../../../../theme/globalStyle';
import {PRIMARY} from '../../../../theme/colors';
import workerWorkerImg from '../../../../images/worker-svg.svg';
import workerMisterImg from '../../../../images/worker-mister.svg';

const Jobs = () => {

    const [data] = useState(jobsData['DETAIL']);
    const [texts] = useState(textsData['JOB']);

    return (
        <ArticleLayout header={texts.title} footer="">
            <h2 className="py-3 font-weight-bold">{texts.par[0]}</h2>
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-self-stretch">
                    {data.map((item, index) =>
                        <div key={index} className="d-flex p-1 align-self-stretch">
                            <div className="card user-card">
                                <div className="card-block">
                                    <div className="card-body">
                                        <div className="p-3 text-center">
                                            <h3 style={{color: PRIMARY}}
                                                className="font-weight-bold text-center">{item.contract}</h3>
                                            <Col className="offset-2 col-8">
                                                <img
                                                    className="img-radius"
                                                    alt={item.contract}
                                                    src={item.img === 'workerWorkerImg' ? workerWorkerImg : item.img === 'workerMisterImg' ? workerMisterImg : ''}
                                                />
                                            </Col>
                                        </div>
                                        <Hr/>
                                        {item.sections.map(data => <div key={data.id}>
                                            <h4 style={{color: PRIMARY}}>{data.title}</h4>
                                            <ul>
                                                {data.list.map((listItem, index) => <li
                                                    key={data.id + '-' + index}>{listItem}</li>)}
                                            </ul>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </ArticleLayout>
    );
};


export default Jobs;