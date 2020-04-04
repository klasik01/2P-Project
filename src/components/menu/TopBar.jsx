import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Collapse, Container} from 'reactstrap';
import {DropdownMenuComponent} from './DropDownMenu';
import {
    buildAboutMenu,
    buildContactMenu,
    buildHomeMenu,
    buildJobMenu,
    buildProjectMenu,
    buildServiceMenu
} from './MenuStructure';
import useScreenType from '../../utils/screenType';
import {getNavbarSize, setNavbarWrapperStyle} from './utils';
import {CollapseButton, MenuNavLink, MyNav, MyNavbarBrand, TopNavigation} from './style';
import PropTypes from 'prop-types';

const TopBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [homeMenu, setHomeMenu] = useState(buildHomeMenu());
    const [aboutMenu, setAboutMenu] = useState(buildAboutMenu());
    const [jobMenu, setJobMenu] = useState(buildJobMenu());
    const [projectMenu, setProjectMenu] = useState(buildProjectMenu());
    const [serviceMenu, setServiceMenu] = useState(buildServiceMenu());
    const [contactMenu, setContactMenu] = useState(buildContactMenu());

    const toggle = () => setIsOpen(!isOpen);

    const {classOnScroll} = props;
    const screenType = useScreenType();
    const isLarge = !!getNavbarSize(classOnScroll, useScreenType());
    const navbarWrapperStyle = () => setNavbarWrapperStyle(screenType, classOnScroll);

    useEffect(() => {
    });

    return (
        <TopNavigation className={`navbar navbar-expand-lg fixed-top ${navbarWrapperStyle()}`} main={isLarge}>
            <Container>
                <MyNavbarBrand main={isLarge.toString()} className="navbar-brand" tag={MenuNavLink} to="/">2P
                    Stavební</MyNavbarBrand>
                <CollapseButton className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={toggle}>
                    <FontAwesomeIcon icon="bars" size="lg"/>
                </CollapseButton>
                <Collapse isOpen={isOpen} navbar className="collapse navbar-collapse">
                    <MyNav className="navbar-nav ml-auto px-4" main={isLarge.toString()}>
                        {/* <DropdownMenuComponent label={'Úvod'} roles={homeMenu} /> */}
                        <DropdownMenuComponent label={'O nás'} roles={aboutMenu}/>
                        <DropdownMenuComponent label={'Naše projekty'} roles={projectMenu}/>
                        <DropdownMenuComponent label={'Služby'} roles={serviceMenu}/>
                        <DropdownMenuComponent label={'Zaměstnání'} roles={jobMenu}/>
                        <DropdownMenuComponent label={'Kontakt'} roles={contactMenu}/>
                    </MyNav>
                </Collapse>
            </Container>
        </TopNavigation>
    );
};

TopBar.propTypes = {
    main: PropTypes.bool,
    classOnScroll: PropTypes.bool.isRequired
};

export default withRouter(TopBar);