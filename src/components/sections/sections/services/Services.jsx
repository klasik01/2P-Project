import React, { useState } from 'react';
import { ArticleLayout } from '../../../common/Layout';
import servicesData from '../../../../data/services.json';
import textsData from '../../../../data/texts.json';
import { PRIMARY } from '../../../../theme/colors';
import { Hr } from '../../../../theme/globalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MyLink = styled(Link)`
  color: black;
  border-radius: 0;
  border: none;
  :hover {
    background: ${PRIMARY};
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;

const Services = () => {
    const [data] = useState(servicesData);
    const [text] = useState(textsData['SERVICE']);

    return (
        <ArticleLayout header={text.title} footer="">
            <div className="container-fluid d-flex">
                <div className="d-flex flex-wrap justify-content-center">
                    {data.map(item =>
                        <div key={item.key} className="p-2 d-flex col-md-4" id={item.key}>
                            <MyLink to={'/services/' + item.key} className=" py-2 card card-body">
                                <div className="col">
                                    <div className="text-center">
                                        <h2 className="p-2">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <Hr/>
                                    <div className="text-center">
                                        <i className="text-justify">{item.paragraph}</i>
                                    </div>
                                    <Hr/>
                                </div>
                            </MyLink>
                        </div>
                    )}
                </div>
            </div>
        </ArticleLayout>
    );
};

export default Services;
