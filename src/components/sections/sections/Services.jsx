import React, {useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import servicesData from '../../../data/services.json';
import textsData from '../../../data/texts.json';
import {PRIMARY} from '../../../theme/colors';
import {Hr} from "../../../theme/globalStyle";

const Services = () => {
    const [data] = useState(servicesData);
    const [text] = useState(textsData['SERVICE']);

    return (
        <ArticleLayout header={text.title} footer="">
            <div className="container-fluid d-flex">
                <div className="d-flex flex-wrap justify-content-center">
                    {data.map(item =>
                        <div key={item.key} className="p-2 d-flex col" id={item.key}>
                            <div className=" py-2 card card-body bg-light">
                                <div className="col">
                                    <div className="text-center">
                                        <h2 style={{color: PRIMARY}} className="p-2">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <Hr />
                                    <div className="text-center">
                                        <i className="text-justify">{item.paragraph}</i>
                                    </div>
                                    <Hr/>
                                    <ul>
                                        {item.list
                                            .filter(todo => todo.text)
                                            .map(todo => <li key={todo.id}>{todo.text}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </ArticleLayout>
    );
};

export default Services;