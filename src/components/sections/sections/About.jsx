import React, {useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import textsData from '../../../data/texts.json';

const About = () => {

    const [data] = useState(textsData['ABOUT']);

    return (
        <ArticleLayout header={data.title} footer="">
            {data.text.map((item, index) => {
                return <p key={index} className="text-justify">{item}</p>;
            })
            }
        </ArticleLayout>
    );
};

export default About;