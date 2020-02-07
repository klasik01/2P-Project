import styled from "styled-components";
import { PRIMARY, SECONDARY } from '../../theme/colors';
import { NavLink } from "reactstrap";


export const TopBarWrapper = styled.nav`
`;

export const MyNavbar = styled.nav`
    height: ${props => (props.main ? '80px' : '54px')};
    transition: all 0.5s;
    font-size: 1em;
    opacity: ${props => (props.main ? '1' : '1')};
    color: ${props => (props.main ? 'black' : 'navy')};
    margin-top: ${props => (props.main ? '0px' : '20px')};
 `;

export const MyNavbarBrand = styled.a`
  margin-right: ${props => (props.main ? '0' : '0')};
  text-transform: uppercase;
  padding: ${props => (props.main ? '10px 150px' : '10px 15px')};
  transition: all 0.5s;
  font-weight: bold;
  background: ${props => props.main ? PRIMARY : SECONDARY};
`;

export const MyNavbarBrandIcon = styled.span`
  `;

export const MyNavbarToggler = styled.button`
`;

export const MyCollapse = styled.div`
 `;

export const MyNav = styled.ul`
 `;

export const MyNavItem = styled.li`
  margin-right: ${props => (props.main ? '0' : '0')};
  padding: ${props => (props.main ? '5px 10px' : '50px 10px')};
  transition: all 0.5s;
  background: ${props => props.main ? SECONDARY : PRIMARY};
`;

export const MyNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  opacity: 1;

  &:hover {
  }
`;