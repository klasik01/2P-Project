import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import styled from 'styled-components';
import { TOPBAR_BACKGROUND_PRIMARY, TOPBAR_BACKGROUND_SECONDARY } from '../../theme/colors';


const TopBarWrapper = styled.nav`
  margin-bottom: 54px;
`;

const TopNavBar = styled(Navbar)`
  opacity: ${props => (props.show ? '1' : '1')};
  color: ${props => (props.show ? 'black' : 'navy')};
  height: ${props => (props.show ? '80px' : '54px')};
  transition: all 0.2s;
 `;

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
      <TopBarWrapper >
        <TopNavBar className="" fixed="top" color="dark" dark expand="md" role="navigation" show={classOnScroll}>
          <Container>
            <NavbarBrand href="/">2P Stavební</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">O Nás</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    O Nás
              </DropdownToggle>
                  <DropdownMenu right={false}>
                    <DropdownItem>
                      Historie
                </DropdownItem>
                    <DropdownItem>
                      Zakázky
                </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#gallery">Galerie</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#service">Služby</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </TopNavBar>
      </TopBarWrapper>
    )
  },
    [classOnScroll, isOpen]
  );
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

TopBar.propTypes = {
  show: PropTypes.bool,

}

export default withRouter(TopBar);
