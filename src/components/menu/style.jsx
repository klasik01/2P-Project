import styled from "styled-components";
import { PRIMARY, SECONDARY } from '../../theme/colors';


export const TopBarWrapper = styled.nav`
  margin-bottom: 54px;
`;

export const MyNavbar = styled.nav`
    height: ${props => (props.show ? '80px' : '54px')};
    transition: all 0.5s;
    font-size: 1em;
    opacity: ${props => (props.show ? '1' : '1')};
    color: ${props => (props.show ? 'black' : 'navy')};
 `;

export const MyNavbarBrand = styled.a`
  `;

export const MyNavbarBrandIcon = styled.span`
    color: pink;
  `;

export const MyNavbarToggler = styled.button`
`;

export const MyCollapse = styled.div`
 `;

export const MyNav = styled.ul`
 `;

export const MyNavItem = styled.li`
  margin-right: 0;
  padding: 5px 10px;
  transition: all 0.5s;
  background: ${props => props.show ? PRIMARY : SECONDARY};
`;

export const MyNavLink = styled.a`
  text-transform: uppercase;
  color: ${SECONDARY};
  font-weight: bold;
  opacity: 1;

  &:hover {
    color: ${props => props.show ? 'black' : 'green'};
  }
`;