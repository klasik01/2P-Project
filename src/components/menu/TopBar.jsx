import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarToggler,
  NavItem,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,

} from "reactstrap";
import classNames from "classnames";


const TopBarWrapper = styled.footer``;

const TopBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <TopBarWrapper >
      <Navbar className="" fixed="top" color="danger" dark expand="md">
        <NavbarBrand href="/">2P Stavební</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
              <NavLink href="#galerie">Galerie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </TopBarWrapper>
  );
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default withRouter(TopBar);
