import styled from "styled-components";
import {PRIMARY} from '../../theme/colors';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";


export const TopBarWrapper = styled.nav`
`;

export const MyNavbar = styled(Navbar)`
    ${props => (props.main ? 'height: 80px' : '')};
    transition: all .5s;
    font-size: 1em;
    opacity: ${props => (props.main ? '1' : '1')};
    /* ${props => (props.main ? 'color: black' : '')}; */
    margin-top: ${props => (props.main ? '20px' : '0px')};
 `;

export const MyNavbarBrand = styled(NavbarBrand)`
  margin-right: ${props => (props.main ? '0' : '0')};
  text-transform: uppercase;
  padding: ${props => (props.main ? '10px 15px' : '10px 15px')};
  transition: all 0.3s;
  font-weight: bold;
  ${props => props.main ? 'background: ' + PRIMARY : ''};
`;

export const MyNavbarBrandIcon = styled.span`
  `;

export const MyNavbarToggler = styled(NavbarToggler)`
`;

export const MyCollapse = styled(Collapse)`
 `;

export const MyNav = styled(Nav)`
 `;

export const MyNavItem = styled(NavItem)`
  margin-right: ${props => (props.main ? '0' : '0')};
  padding: ${props => (props.main ? '5px 10px' : '5px 10px')};
  transition: all 0.5s;
  background: ${props => props.main ? PRIMARY : 'none'};
`;

export const MyNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  opacity: 1;

  &:hover {
  }
`;