import React from 'react';
import {ArticleLayout} from '../common/Layout';
import image from '../../images/house.jpg';
import {FullColumn} from '../common/BlockLayout';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PRIMARY} from '../../theme/colors';
const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${PRIMARY};
`;

const Contracts = () => {
    return (
        <ArticleLayout header="Realizované zakázky" footer="">
            <FullColumn>
                <div className="container mt-40">
                    <div className="row mt-30">
                        <div className="col-md-4 col-sm-6">
                            <div className="box8">
                                <img src={image}/>
                                <h3 className="title">Barabizna Pešek</h3>
                                <div className="box-content">
                                    <ul className="icon">
                                        <li><a href="#"><MyFontAwesomeIcon icon={'hammer'} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box8">
                                <img src={image}/>
                                <h3 className="title">Vila Hladílek</h3>
                                <div className="box-content">
                                    <ul className="icon">
                                        <li><a href="#"><i className="fa fa-search"/><MyFontAwesomeIcon icon={'hammer'} /></a></li>
                                        <li><a href="#"><i className="fa fa-link"/><MyFontAwesomeIcon icon={'pen'} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box8">
                                <img src={image}/>
                                <h3 className="title">Bunkr u Lehni</h3>
                                <div className="box-content">
                                    <ul className="icon">
                                        <li><a href="#"><i className="fa fa-search"/><MyFontAwesomeIcon icon={'hammer'} /></a></li>
                                        <li><a href="#"><i className="fa fa-link"/><MyFontAwesomeIcon icon={'pen'} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FullColumn>
        </ArticleLayout>
    );
};


export default Contracts;