import styled from "styled-components";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';
import { PRIMARY, SECONDARY } from '../../theme/colors';


export const TopBarWrapper = styled.nav`
  margin-bottom: 54px;
`;

export const MyNavBar = styled(Navbar)`
    height: ${props => (props.show ? '80px' : '54px')};
    transition: all 0.5s;
    font-size: 1em;
 `;

export const MyNavbarBrand = styled(NavbarBrand)`
  `;

export const MyNavbarToggler = styled(NavbarToggler)`
`;

export const MyCollapse = styled(Collapse)`
 `;

export const MyNav = styled(Nav)`
 `;

export const MyNavItem = styled(NavItem)`
  margin-right: 0;
  padding: 5px 10px;
  transition: all 0.5s;
  background: ${props => props.show ? PRIMARY : SECONDARY};
`;

export const MyNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: ${SECONDARY};
  font-weight: bold;
  opacity: 1;

  &:hover {
    color: ${props => props.show ? 'black' : 'green'};
  }
`;