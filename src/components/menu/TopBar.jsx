import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container,
} from 'reactstrap';
import {
  MyCollapse,
  MyNavItem,
  MyNav,
  MyNavBar,
  MyNavLink,
  MyNavbarBrand,
  MyNavbarToggler,
  TopBarWrapper
} from './style';

const TopBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [classOnScroll, setStyleOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > -80
      if (isShow !== classOnScroll) setStyleOnScroll(isShow)
    },
    [classOnScroll], false, false, 300
  )

  return useMemo(() => {
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
  );
}

TopBar.propTypes = {
  show: PropTypes.bool,

}

export default withRouter(TopBar);
