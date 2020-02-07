import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { MyCollapse, MyNav, MyNavbar, MyNavbarBrand, MyNavbarToggler, MyNavItem, MyNavLink, TopBarWrapper, MyNavbarBrandIcon } from './style';
import useScreenType from '../../utils/screenType';
import { getNavbarSize } from './utils';

const TopBar = (props) => {

  const { classOnScroll } = props;

  const main = getNavbarSize(classOnScroll, useScreenType());

  const screenType = useScreenType();

  const navbarWrapperStyle = () => {
    if (screenType === 'sm' || screenType === 'xs' || screenType === 'md') {
      if (classOnScroll) {
        return 'd-block';
      } else {
        return 'd-block';
      }
    }

    if (classOnScroll) {
      return 'd-none d-lg-block';
    }
    return 'd-none';
  }


  return (
    <TopBarWrapper main={main} className={navbarWrapperStyle()}>
      <MyNavbar main={main} className="navbar navbar-expand-lg fixed-top">
        <Container>
          <MyNavbarBrand main={main} className="navbar-brand" href="/" >2P Stavební</MyNavbarBrand>
          <MyNavbarToggler main={main} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <MyNavbarBrandIcon main={main} className="navbar-toggler-icon"></MyNavbarBrandIcon>
          </MyNavbarToggler>
          <MyCollapse main={main} className="collapse navbar-collapse" id="navbarSupportedContent">
            <MyNav main={main} className="navbar-nav ml-auto">
              <MyNavItem main={main} className="nav-item ">
                <MyNavLink main={main} activeClassName="" className="nav-link" tag={NavLink} to="/">Home <span className="sr-only">(current)</span></MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} sclassName="nav-item">
                <MyNavLink main={main} activeClassName="active btn" className="nav-link" tag={NavLink} to="/about">o nás</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active btn" className="nav-link" tag={NavLink} to="/article">naše projekty</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active btn" className="nav-link" tag={NavLink} to="/services">služby</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active btn" className="nav-link" tag={NavLink} to="/contact">kontakty</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active btn" className="nav-link" tag={NavLink} to="/job">zaměstnání</MyNavLink>
              </MyNavItem>
            </MyNav>
          </MyCollapse>
        </Container>
      </MyNavbar>
    </TopBarWrapper>
  )
}

TopBar.propTypes = {
  classOnScroll: PropTypes.bool,

}

export default withRouter(TopBar);