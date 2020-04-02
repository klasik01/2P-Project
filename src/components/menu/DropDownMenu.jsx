import React from 'react';
import {MenuNavLink, MyUncontrolledDropdown,DropToggleMenuLink, WrappedDropdownMenu, MenuDropdownItem, DropMenuLink} from './style';
import { NavItem } from 'reactstrap';


export const DropdownMenuComponent = ({ label, roles }) => {

        if (roles === null || roles === undefined || roles.length === 0) {
            return null;
        }

        if (roles.length === 1) {
            return (
                <NavItem>
                    <MenuNavLink className="nav-link" to={roles[0].to}
                                 activeClassName="nav-item-active">
                        {roles[0].label}
                    </MenuNavLink>
                </NavItem>
            )
        }

        return (
            <MyUncontrolledDropdown >
                <DropToggleMenuLink caret nav className="">
                    {label}
                </DropToggleMenuLink>
                <WrappedDropdownMenu>
                    {roles.map(item =>
                        <MenuDropdownItem key={item.to}>
                            <DropMenuLink to={item.to}>
                                {item.label}
                            </DropMenuLink>
                        </MenuDropdownItem>
                    )}
                </WrappedDropdownMenu>
            </MyUncontrolledDropdown>
        );
    }
;



