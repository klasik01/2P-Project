import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PRIMARY} from '../../theme/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const MyLink = styled(Link)`
  color: ${props => props.color};
  :hover {
    color: black;
  }
`;

export const IconWrapper = styled.span`
    color: ${props => props.color};
`;

export const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${PRIMARY};
`;

const BlockWrapperLIRTC = styled.div`
`;

export const LeftIconRightTextCard = props => {
    const {icon, title, paragraph, className} = props;
    return (
        <div className={`col-sm-6 col-xs-12 ${className}`}>
            <BlockWrapperLIRTC className="row clearfix">
                <div className="col-4">
                    <IconWrapper className="fa-stack fa-2x align-self-center" color="white">
                        <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle"/>
                        <FontAwesomeIcon className="fas fa-stack-1x" icon={icon}/>
                    </IconWrapper>
                </div>
                <div className="col-8 text-center">
                    <h4 className="service-heading">{title}</h4>
                    <p className="text-muted">{paragraph}</p>
                </div>

            </BlockWrapperLIRTC>
        </div>
    );
};

LeftIconRightTextCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};


export const TopIconBottomText = (props) => {
    const {icon, title, paragraph, id} = props;
    return (
        <div className="col-md-4 ">
            <BlockWrapperLIRTC className="my-2 text-center">
                <IconWrapper className="fa-stack fa-2x" color={'white'}>
                    <MyLink to={`/services/view/${id}`} className="text-decoration-none" color="white">
                        <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle"/>
                        <FontAwesomeIcon className="fas  fa-stack-1x" icon={icon}/>
                    </MyLink>
                </IconWrapper>
                <h4 className="service-heading font-weight-bold">{title}</h4>
                <div className="text">{paragraph}</div>
            </BlockWrapperLIRTC>
        </div>
    );
};

TopIconBottomText.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    screenType: PropTypes.string,
    id: PropTypes.number,
};
