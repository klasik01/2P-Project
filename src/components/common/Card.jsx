import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PRIMARY} from '../../theme/colors';
import {NavLink as MyNavLink} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';


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


export const LinkCard = (props) => {
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
