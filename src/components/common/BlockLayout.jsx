import React from 'react';
import { BannerHeader } from './BannerHeader';
import PropTypes from 'prop-types';
import { Col, Container, Row, NavLink as MyNavLink } from 'reactstrap';
import styled from 'styled-components';
import { PrimaryButton } from './Button';
import { PRIMARY, BUTTON_PRIMARY_2, BUTTON_SECONDARY_1, BUTTON_SECONDARY_2 } from '../../theme/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";


const Section = styled.section`
    padding: 0 20px;
    background-image: ${props => props.background ? 'linear-gradient(to right, rgba(168, 58, 50, 0.5), rgba(191, 106, 99,0.5)),' : ''} url('https://wp3.ourwpdemo.com/cretox/wp-content/uploads/2018/05/patern-1.png');
    background-repeat: no-repeat;
    background-position: center;
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
`;

const Section2 = styled.section`
    padding: 0 20px;
`;


const BlockWrapper = styled.div`
    :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    transition: all 0.5s ease;
`;

const BlockLink = styled.div`
    
`;

const IconWrapper = styled.span`
    color: ${props => props.color};
`;

const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${PRIMARY};
`;



export const LeftHeaderRightTextLayout = (props) => {
    return (
        <Section className="py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="p-2">
                            <div className="py-2"><h2>Co děláme?</h2></div>
                            <div className="text my-4">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae</div>
                            <div className="">
                                <PrimaryButton>Více informací</PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row clearfix ">
                            {[1, 2, 3, 4].map(item =>
                                <BlockWrapper className="m-2 col-md-5 col-sm-12 bg-white" key={item}>
                                    <div className="py-4 text-center">
                                        <IconWrapper className="fa-stack fa-2x" color={'white'}>
                                            <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle" />
                                            <FontAwesomeIcon className="fas  fa-stack-1x" icon={"truck-pickup"} />
                                        </IconWrapper>
                                        <BlockLink>
                                            <MyNavLink tag={NavLink} to="/job/1" className="btn btn-link btn-lg">Back to Home</MyNavLink>
                                        </BlockLink>
                                        <div className="text">
                                            Lorem ipsum dolor amet contur adip isicing elit sed eiusm
                                                    </div>
                                    </div>
                                </BlockWrapper>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export const RightHeaderLeftTextLayout = (props) => {
    return (
        <Section className="py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8">
                        <div className="row clearfix ">
                            {[1, 2].map(item =>
                                <BlockWrapper className="m-2 col-md-5 col-sm-12 bg-white" key={item}>
                                    <div className="py-4 text-center">
                                        <IconWrapper className="fa-stack fa-2x" color={'white'}>
                                            <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle" />
                                            <FontAwesomeIcon className="fas  fa-stack-1x" icon={"hammer"} />
                                        </IconWrapper>
                                        <BlockLink>
                                            <MyNavLink tag={NavLink} to="/job/1" className="btn btn-link btn-lg">Dělník pozice {item}</MyNavLink>
                                        </BlockLink>
                                        <div className="text">
                                            Lorem ipsum dolor amet contur adip isicing elit sed eiusm
                                                    </div>
                                    </div>
                                </BlockWrapper>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-2">
                            <div className="py-2"><h2>Hledáš práci?</h2></div>
                            <div className="text my-4">Máme trvalý zájem o spolupráci s novými zaměstnanci, kteří jsou odborníky ve svém oboru, chtějí se trvale rozvíjet a patřit společně s námi ke špičce stavební profese.</div>
                            <div className="">
                                <PrimaryButton>Více informací</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export const CalculationLayout = (props) => {
    return (
        <Section2 className="py-5" style={{backgroundColor: 'rgba(168, 58, 50, 0.5)'}}>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="p-2">
                            <div className="py-2"><h2>Chceš nezávaznou kalkulaci?</h2></div>
                            <div className="text my-4">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae</div>
                            <div className="">
                                <PrimaryButton inverse>Více informací</PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row clearfix ">
                            <div className="p-2">
                                <div className="py-2"><h2>Kde nás najdete?</h2></div>
                                <div className="text my-4">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae</div>
                                <div className="text my-4">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae</div>
                                <div className="text my-4">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae</div>
                                <div className="">
                                    <PrimaryButton inverse>Více informací</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section2>
    );
}

export const ActualityLayout = (props) => {
    return (
        <Section background className="py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <div className="p-2">
                            <div className="py-5 text-center"><h2>Naše zakázky</h2></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row clearfix ">
                            {[1,2,3,4,1,2,3,4].map(item =>
                                <div className="cl-md-4 col-lg-3 " key={item}>
                                    <BlockWrapper className="p-4 text-center bg-white my-4">
                                        <BlockLink>
                                            <MyNavLink tag={NavLink} to="/job/1" className="btn btn-link btn-lg">Zakázka číslo {item}</MyNavLink>
                                        </BlockLink>
                                        <div className="text">
                                            Lorem ipsum dolor amet contur adip isicing elit sed eiusm
                                                    </div>
                                    </BlockWrapper>
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </Section>
    );
}