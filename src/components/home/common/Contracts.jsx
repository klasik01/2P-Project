import React from 'react';
import styled from 'styled-components';
import {PrettyHeader} from '../../common/Typography';
import {DefaultSectionContainer, FullColumn} from '../../common/BlockLayout';
import {PrimaryButton, StyledLink} from '../../common/Button';
import {Link} from 'react-router-dom';
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

export const ContractCard = (props) => {
    const {title, image, to} = props;
    return (
        <BlockWrapper backgroundImage={image} className="col-md-4 col-sm-6 mb-3">
            <Link to={to}>
                <BlockItem className="box8">
                    <img src={image} alt={title}/>
                    <h3 className="title">{title}</h3>
                    <div className="box-content"/>
                </BlockItem>
            </Link>
        </BlockWrapper>
    );
};

ContractCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
};

const Contracts = (props) => {

    const {data = []} = props;

    return (
        <Wrapper className="text-center">
            <DefaultSectionContainer isBackground>
                <FullColumn>
                    <div className="col text-center">
                        <PrettyHeader>Realizované zakázky</PrettyHeader>
                    </div>
                </FullColumn>
                <FullColumn>
                    <div className="container mt-1">
                        <div className="row mt-1">
                            {data.slice(0, 3).map(item =>
                                <ContractCard
                                    key={item.id} title={item.title} icon={'hammer'} image={image}
                                    to={item.to + item.id}/>
                            )}
                        </div>
                    </div>
                </FullColumn>
                <FullColumn className="d-flex justify-content-center">
                    <StyledLink to="/projects">
                        <PrimaryButton inverse className="btn-block my-2">Zobrazit všechny</PrimaryButton>
                    </StyledLink>
                </FullColumn>
            </DefaultSectionContainer>
        </Wrapper>
    );
};

export default Contracts;