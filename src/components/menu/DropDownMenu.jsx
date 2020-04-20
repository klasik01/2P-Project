import React from 'react';
import {
    DropMenuLink,
    DropToggleMenuLink,
    MenuDropdownItem,
    MenuNavLink,
    MyUncontrolledDropdown,
    WrappedDropdownMenu
} from './style';
import {NavItem} from 'reactstrap';
import PropTypes from 'prop-types';

export const DropdownMenuComponent = ({label, roles, onClick}) => {

    if (roles === null || roles === undefined || roles.length === 0) {
        return null;
    }

    if (roles.length === 1) {
        return (
            <NavItem>
                <MenuNavLink onClick={() => onClick()} className="nav-link" to={roles[0].to}
                    activeClassName="nav-item-active">
                    {roles[0].label}
                </MenuNavLink>
            </NavItem>
        );
    }

    return (
        <MyUncontrolledDropdown>
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
};

DropdownMenuComponent.propTypes = {
    label: PropTypes.string.isRequired,
    roles: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};



