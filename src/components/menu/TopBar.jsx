import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Collapse, Container} from 'reactstrap';
import {DropdownMenuComponent} from './DropDownMenu';
import {buildAboutMenu, buildContactMenu, buildJobMenu, buildProjectMenu, buildServiceMenu} from './MenuStructure';
import useScreenType, {showMinLarge} from '../../utils/screenType';
import {getNavbarSize, setNavbarWrapperStyle} from './utils';
import {CollapseButton, MenuNavLink, MyNav, MyNavbarBrand, MyNavBarBrandImg, TopNavigation} from './style';
import PropTypes from 'prop-types';
import logo from '../../images/logoBrandNegativ.png';

const TopBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [aboutMenu, setAboutMenu] = useState([]);
    const [jobMenu, setJobMenu] = useState([]);
    const [projectMenu, setProjectMenu] = useState([]);
    const [serviceMenu, setServiceMenu] = useState([]);
    const [contactMenu, setContactMenu] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    const {classOnScroll} = props;
    const screenType = useScreenType();
    const isLarge = !!getNavbarSize(classOnScroll, useScreenType());
    const navbarWrapperStyle = () => setNavbarWrapperStyle(screenType, classOnScroll);

    useEffect(() => {
        setAboutMenu(buildAboutMenu());
        setJobMenu(buildJobMenu());
        setProjectMenu(buildProjectMenu());
        setServiceMenu(buildServiceMenu());
        setContactMenu(buildContactMenu());
    }, []);

    return (
        <TopNavigation className={`navbar navbar-expand-lg fixed-top ${navbarWrapperStyle()}`} main={isLarge}>
            <Container>
                <MyNavbarBrand
                    main={isLarge.toString()} className="" tag={MenuNavLink}
                    to="/"><MyNavBarBrandImg className="img-fluid" src={logo}/></MyNavbarBrand>
                <CollapseButton
                    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={toggle}>
                    <FontAwesomeIcon icon="bars" size="lg"/>
                </CollapseButton>
                <Collapse isOpen={isOpen} navbar>
                    <MyNav navbar className="ml-auto px-4" main={isLarge.toString()}>
                        <DropdownMenuComponent label={'O nás'} roles={aboutMenu} onClick={showMinLarge(screenType) ? () => {} : toggle}/>
                        <DropdownMenuComponent label={'Naše projekty'} roles={projectMenu} onClick={showMinLarge(screenType) ? () => {} : toggle}/>
                        <DropdownMenuComponent label={'Služby'} roles={serviceMenu} onClick={showMinLarge(screenType) ? () => {} : toggle}/>
                        <DropdownMenuComponent label={'Zaměstnání'} roles={jobMenu} onClick={showMinLarge(screenType) ? () => {} :toggle}/>
                        <DropdownMenuComponent label={'Kontakt'} roles={contactMenu} onClick={showMinLarge(screenType) ? () => {} : toggle}/>
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