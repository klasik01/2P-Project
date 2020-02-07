import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { MyCollapse, MyNav, MyNavbar, MyNavbarBrand, MyNavbarToggler, MyNavItem, MyNavLink, TopBarWrapper, MyNavbarBrandIcon } from './style';

const TopNavBar = (props) => {

  const { classOnScroll } = props;

  return (
    <TopBarWrapper main={classOnScroll} className={classOnScroll ? 'd-none d-lg-block' : 'd-none'}>
      <MyNavbar main={classOnScroll} className="navbar navbar-expand-lg fixed-top">
        <Container>
          <MyNavbarBrand main={classOnScroll} className="navbar-brand" href="/" >2P Stavební</MyNavbarBrand>
          <MyNavbarToggler main={classOnScroll} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <MyNavbarBrandIcon main={classOnScroll} className="navbar-toggler-icon"></MyNavbarBrandIcon>
          </MyNavbarToggler>
          <MyCollapse main={classOnScroll} className="collapse navbar-collapse" id="navbarSupportedContent">
            <MyNav main={classOnScroll} className="navbar-nav ml-auto">
              <MyNavItem main={classOnScroll} className="nav-item ">
                <MyNavLink main={classOnScroll} activeClassName="" className="nav-link" tag={NavLink} to="/">Home <span className="sr-only">(current)</span></MyNavLink>
              </MyNavItem>
              <MyNavItem main={classOnScroll} sclassName="nav-item">
                <MyNavLink main={classOnScroll} activeClassName="active btn" className="nav-link" tag={NavLink} to="/about">o nás</MyNavLink>
              </MyNavItem>
              <MyNavItem main={classOnScroll} className="nav-item">
                <MyNavLink main={classOnScroll} activeClassName="active btn" className="nav-link" tag={NavLink} to="/article">naše projekty</MyNavLink>
              </MyNavItem>
              <MyNavItem main={classOnScroll} className="nav-item">
                <MyNavLink main={classOnScroll} activeClassName="active btn" className="nav-link" tag={NavLink} to="/services">služby</MyNavLink>
              </MyNavItem>
              <MyNavItem main={classOnScroll} className="nav-item">
                <MyNavLink main={classOnScroll} activeClassName="active btn" className="nav-link" tag={NavLink} to="/contact">kontakty</MyNavLink>
              </MyNavItem>
              <MyNavItem main={classOnScroll} className="nav-item">
                <MyNavLink main={classOnScroll} activeClassName="active btn" className="nav-link" tag={NavLink} to="/job">zaměstnání</MyNavLink>
              </MyNavItem>
            </MyNav>
          </MyCollapse>
        </Container>
      </MyNavbar>
    </TopBarWrapper>
  )
}

TopNavBar.propTypes = {
  classOnScroll: PropTypes.bool,

}

export default withRouter(TopNavBar);