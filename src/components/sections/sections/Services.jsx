import React, {useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import servicesData from '../../../data/services.json';
import textsData from '../../../data/texts.json';
import {PRIMARY} from '../../../theme/colors';
import {Col} from "reactstrap";

const Services = () => {
    const [data] = useState(servicesData);
    const [text] = useState(textsData['SERVICE']);

    return (
        <ArticleLayout header={text.title} footer="">
            {data.map(item =>
                <div key={item.key} className="my-2" id={item.key}>
                    <div className="row py-2 card card-body bg-light">
                        <Col className="">
                            <h2 style={{color: PRIMARY}} className="p-2"><FontAwesomeIcon className="fas"
                                                                                          icon={item.icon}/>&nbsp;{item.title}
                            </h2>
                            <i className="text-justify">{item.paragraph}</i>
                            <hr/>
                            <ul>
                                {item.list
                                    .filter(todo => todo.text)
                                    .map(todo => <li key={todo.id}>{todo.text}</li>)
                                }
                            </ul>
                        </Col>
                    </div>
                </div>
            )}
        </ArticleLayout>
    );
};

export default Services;