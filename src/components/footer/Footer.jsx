import React from 'react';
import styled from 'styled-components';

import base from '../../data/baseInfo.json';
import { Col, Row, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FOOTER_BACKGROUND_COLOR_PRIMARY, FOOTER_TEXT_1, FOOTER_TEXT_2, FOOTER_TEXT_3 } from '../../theme/colors.js';


const FooterWrapper = styled.footer`
    background: ${FOOTER_BACKGROUND_COLOR_PRIMARY};
`;

const AuthorPane = styled.div`
    color: ${FOOTER_TEXT_3};
    padding-bottom: 10px;
`;

const FooterHeader = styled.h1`
    color: ${FOOTER_TEXT_1};
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 2;
`;

const InfoRow = styled.p`
    text-align: justify;
    font-weight: bolder;
    line-height: 1;

`;

const LinkCustom = styled.a`
    color: ${FOOTER_TEXT_1};
    margin-left: 5px;
    margin-right: 5px;
    transition: all 0.5s;
    &&:hover {
        transition: all 0.5s;
        color: ${FOOTER_TEXT_2};
    }
`;


const Footer = (props) => {

    const author = base['DEVELOPER'];
    const company = base['COMPANY'];

    return (
        <FooterWrapper>
            <Container>
                <Row className="pt-4">
                    <Col md={4} className="">
                        <FooterHeader>{company.name}</FooterHeader>
                        <InfoRow className="" style={{ fontSize: '4em' }}>
                            <LinkCustom href={company.links.facebook}><FontAwesomeIcon icon={faFacebookSquare} /></LinkCustom>
                            <LinkCustom href={company.links.linkedin}><FontAwesomeIcon icon={faLinkedin} /></LinkCustom>
                            <LinkCustom href={company.links.instagram}><FontAwesomeIcon icon={faInstagram} /></LinkCustom>
                        </InfoRow>
                    </Col>
                    <Col md={4}>
                        <FooterHeader>Sídlo firmy</FooterHeader>
                        <InfoRow>{company.address.street}, {company.address.number}</InfoRow>
                        <InfoRow>{company.address.city}, {company.address.zip}</InfoRow>
                    </Col>
                    <Col md={4}>
                        <FooterHeader>Kontaktní osoba</FooterHeader>
                        <InfoRow>{company.contact.name}</InfoRow>
                        <InfoRow>Tel: {company.contact.tel1}</InfoRow>
                        <InfoRow>Tel: {company.contact.tel2}</InfoRow>
                        <InfoRow>Email: {company.contact.email}</InfoRow>
                    </Col>
                </Row>

                <AuthorPane className="text-center">
                    <hr />
                    {`© ${author.year} Copyright: Created by ${author.author}`}
                </AuthorPane>
            </Container>
        </FooterWrapper>
    )
}


export default Footer;