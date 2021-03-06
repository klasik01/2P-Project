import styled from 'styled-components';
import {PRIMARY, SECONDARY} from '../../theme/colors';
import {NavLink} from 'react-router-dom';
import {Nav, NavbarBrand, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';

export const MyNavbarBrand = styled(NavbarBrand)`
  margin-right: ${props => (props.main ? '0' : '0')};
  text-transform: uppercase;
  padding: ${props => (props.main === 'true' ? '10px 0px' : '10px 0px')};
  transition: all 0.3s;
  font-weight: bold;
  max-height: 64px;
  font-family: Dock,serif;
  ${props => props.main === 'true' ? 'background: ' + PRIMARY : ''};
  
  :hover {
    background: ${SECONDARY};
  }
`;

export const MyNavBarBrandImg = styled.img`
  height: 35px;
  width: auto;
  font-family: Dock,serif;
`;

export const MyNav = styled(Nav)`
  background-color: ${props => (props.main === 'true' ? PRIMARY : 'none')};
 `;

export const MyUncontrolledDropdown = styled(UncontrolledDropdown)`
`;

export const DropToggleMenuLink = styled(DropdownToggle)`    
    :visited,
    :link {
        color: rgba(255, 255, 255, 0.85);
    }
    :active,
    :focus,
    :hover
    {
        color: ${SECONDARY};
    }
    transition: all 0.5s ease;
    font-family: Dock,serif;
    text-transform: uppercase;
    && {
        padding: 0.6em 1em;
        margin: 5px;
    }
    &.${'nav-item-active'} {
        color: ${SECONDARY};
    }
`;

export const WrappedDropdownMenu = styled(DropdownMenu)`
    color: rgba(255, 255, 255, 0.85);
    border-radius: 0;
    background-color: ${PRIMARY};
`;

export const MenuDropdownItem = styled(DropdownItem)`
    :visited,
    :link,
    :active,
    :focus,
    :hover {
        opacity: 0.8;
        background-color: ${PRIMARY};
    }
    && {
        color: white;
        padding-right: 15px;
        font-family: Dock,serif;
        text-transform: uppercase;

    }
`;

export const DropMenuLink = styled(NavLink)`
    :visited,
    :link {
    }
    :active,
    :focus,
    :hover
    {
      color: ${SECONDARY};
      text-decoration: none;
    }
    && {
      color: white;
      font-family: Dock,serif;
      text-transform: uppercase;
    }
`;

export const MenuNavLink = styled(NavLink)`
    :visited,
    :link {
        color: rgba(255, 255, 255, 0.85);
    }
    :active,
    :focus,
    :hover
    {
        color: ${SECONDARY};
    }
    transition: all 0.5s ease;
    
    && {
        padding: 0.6em 1em;
        margin: 5px;
        font-family: Dock,serif;
        text-transform: uppercase;
    }
    &.${'nav-item-active'} {
        color: ${SECONDARY};
    }
`;

export const TopNavigation = styled.nav`
    font-weight: bold;
    padding: 1px 10px;
    background-color: ${props => (props.main ? '' : PRIMARY)};
    ${props => (props.main ? 'height: 80px' : '')};
    transition: all 0.2s;
    margin-top: ${props => (props.main ? '20px' : '0px')};
    font-family: Dock,serif;
`;


export const CollapseButton = styled.button`
    color: rgba(255, 255, 255, 0.7);
    border-color: rgba(255, 255, 255, 0.7);
    border-radius: .25em;
    font-family: Dock,serif;
    transition: all 0.2s;

`;