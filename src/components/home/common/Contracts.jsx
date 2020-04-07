import React from 'react';
import styled from 'styled-components';
import {PrettyHeader} from '../../common/Typography';
import {DefaultSectionContainer, FullColumn} from '../../common/BlockLayout';
import {PrimaryButton, StyledLink} from '../../common/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink as MyNavLink} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {PRIMARY} from '../../../theme/colors';
import PropTypes from 'prop-types';
import './style.css';
import image from '../../../images/house.jpg';

const Wrapper = styled.div`
`;

const BlockWrapper = styled.div`
`;

const BlockItem = styled.div`
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

const LinkCard = (props) => {
    const {title, paragraph, image, icon, to} = props;
    return (
        <BlockWrapper backgroundImage={image} className="col-md-6 col-sm-12 ">
            <BlockItem className="p-4 my-2 text-center bg-white">
                <IconWrapper className="fa-stack fa-2x" color={'white'}>
                    <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle"/>
                    <FontAwesomeIcon className="fas  fa-stack-1x" icon={icon}/>
                </IconWrapper>
                <BlockLink>
                    <MyNavLink tag={NavLink} to={to} className="btn btn-link btn-lg">{title}</MyNavLink>
                </BlockLink>
                <div className="text">
                    {paragraph}
                </div>
            </BlockItem>
        </BlockWrapper>
    );
};

LinkCard.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
};

const Contracts = () => {

    return (
        <Wrapper className="text-center">
            <DefaultSectionContainer isBackground>
                <FullColumn>
                    <div className="col text-center">
                        <PrettyHeader>Realizované zakázky</PrettyHeader>
                    </div>
                </FullColumn>
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
                <FullColumn className="d-flex justify-content-center">
                    <StyledLink to="/about">
                        <PrimaryButton inverse className="btn-block my-2">Zobrazit všechny</PrimaryButton>
                    </StyledLink>
                </FullColumn>
            </DefaultSectionContainer>
        </Wrapper>
    );
};

export default Contracts;