import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import { MyCollapse, MyNav, MyNavbar, MyNavbarBrand, MyNavbarToggler, MyNavItem, MyNavLink, TopBarWrapper, MyNavbarBrandIcon } from './style';

const TopBar = (props) => {

  const [classOnScroll, setStyleOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > -80
      if (isShow !== classOnScroll) setStyleOnScroll(isShow)
    },
    [classOnScroll], false, false, 300
  )

  return useMemo(() => {
    return (
      <TopBarWrapper>
        <MyNavbar className={`navbar navbar-expand-md fixed-top bg-dark ${!classOnScroll ? '' : ''}`} show={classOnScroll}>
          <Container>
            <MyNavbarBrand className="navbar-brand" href="#" show={classOnScroll}>2P Stavební</MyNavbarBrand>
            <MyNavbarToggler className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <MyNavbarBrandIcon className="navbar-toggler-icon"></MyNavbarBrandIcon>
            </MyNavbarToggler>
            <MyCollapse className="collapse navbar-collapse" id="navbarSupportedContent">
              <MyNav className="navbar-nav ml-auto">
                <MyNavItem show={classOnScroll} className="nav-item active">
                  <MyNavLink show={classOnScroll} className="nav-link" href="/">Home <span className="sr-only">(current)</span></MyNavLink>
                </MyNavItem>
                <MyNavItem show={classOnScroll} className="nav-item">
                  <MyNavLink show={classOnScroll} className="nav-link" href="/article">Projekty</MyNavLink>
                </MyNavItem>
                <MyNavItem show={classOnScroll} className="nav-item">
                  <MyNavLink show={classOnScroll} className="nav-link" href="#">Disabled</MyNavLink>
                </MyNavItem>
              </MyNav>
            </MyCollapse>
          </Container>
        </MyNavbar>
      </TopBarWrapper>
    )
  },
    [classOnScroll]
  );
}

TopBar.propTypes = {
  show: PropTypes.bool,

}

export default withRouter(TopBar);


/* return useMemo(() => {
  const toggle = () => setIsOpen(!isOpen)
        return (
    <TopBarWrapper>
          <MyNavBar className="" fixed="top" dark color="dark" expand="md" role="navigation" show={classOnScroll}>
            <Container>
              <MyNavbarBrand href="/" show={classOnScroll}>2P Stavební</MyNavbarBrand>
              <MyNavbarToggler onClick={toggle} show={classOnScroll} />
              <MyCollapse isOpen={isOpen} navbar show={classOnScroll}>
                <MyNav className="ml-auto" navbar show={classOnScroll}>
                  <MyNavItem show={classOnScroll}>
                    <MyNavLink active href="article" show={classOnScroll}>O Nás</MyNavLink>
                  </MyNavItem>
                  <MyNavItem show={classOnScroll}>
                    <MyNavLink href="#error" show={classOnScroll}>Projekty</MyNavLink>
                  </MyNavItem>
                  <MyNavItem show={classOnScroll}>
                    <MyNavLink href="#gallery" show={classOnScroll}>Galerie</MyNavLink>
                  </MyNavItem>
                  <MyNavItem show={classOnScroll}>
                    <MyNavLink href="#service" show={classOnScroll}>Služby</MyNavLink>
                  </MyNavItem>
                </MyNav>
              </MyCollapse>
            </Container>
          </MyNavBar>
        </TopBarWrapper>
        )
      },
        [classOnScroll, isOpen]
); */