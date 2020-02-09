import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { MyCollapse, MyNav, MyNavbar, MyNavbarBrand, MyNavbarToggler, MyNavItem, MyNavLink, TopBarWrapper } from './style';
import useScreenType from '../../utils/screenType';
import { getNavbarSize } from './utils';

const TopBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
    return '';
  }

  const myNavbarStyle = () => {
    if (screenType === 'sm' || screenType === 'xs' || screenType === 'md') {
      if (classOnScroll) {
        return 'navbar-dark bg-dark text-light';
      } else {
        return 'navbar-dark bg-dark text-light';
      }
    }

    if (classOnScroll) {
      return '';
    }
    return 'bg-dark text-light';
  }


  return (
    <TopBarWrapper main={main} className={navbarWrapperStyle()}>
      <MyNavbar main={main} dark className={`navbar navbar-expand-lg fixed-top ${myNavbarStyle()}`}>
        <Container>
          <MyNavbarBrand main={main} className="navbar-brand" href="/" >2P Stavební</MyNavbarBrand>
          <MyNavbarToggler main={main} className="navbar-toggler" onClick={toggle} />
          <MyCollapse main={main} className="collapse navbar-collapse " isOpen={isOpen} navbar>
            <MyNav main={main} className="navbar-nav ml-auto bg-dark text-warning">
              <MyNavItem main={main} className="nav-item ">
                <MyNavLink main={main} activeClassName="" className="nav-link" tag={NavLink} to="/">Home <span className="sr-only">(current)</span></MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active" className="nav-link" tag={NavLink} to="/about">o nás</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active" className="nav-link" tag={NavLink} to="/article">naše projekty</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active" className="nav-link" tag={NavLink} to="/services">služby</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active" className="nav-link" tag={NavLink} to="/contact">kontakty</MyNavLink>
              </MyNavItem>
              <MyNavItem main={main} className="nav-item">
                <MyNavLink main={main} activeClassName="active" className="nav-link" tag={NavLink} to="/job">zaměstnání</MyNavLink>
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

};

export default withRouter(TopBar);