import React, {useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Hr} from '../../../theme/globalStyle';
import servicesData from '../../../data/services.json';
import textsData from '../../../data/texts.json';

const Services = () => {
    const [data] = useState(servicesData);
    const [text] = useState(textsData['SERVICE']);

    return (
        <ArticleLayout header={text.title} footer="">
            {data.map(item =>
                <div key={item.key} className="" id={item.key}>
                    <div className="row py-2 card card-body bg-light">
                        <div className="col">
                            <h2 className="p-2"><FontAwesomeIcon className="fas" icon={item.icon}/>&nbsp;{item.title}
                            </h2>
                            <i className="text-justify">{item.paragraph}</i>
                            <hr/>
                            <ul>
                                {item.list
                                    .filter(todo => todo.text)
                                    .map(todo => <li key={todo.id}>{todo.text}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <Hr/>
                </div>
            )}
        </ArticleLayout>
    );
};

export default Services;