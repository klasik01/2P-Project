import React from 'react';
import styled from 'styled-components';
import base from '../data/baseInfo.json';
import {Col, Container, Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FOOTER_BACKGROUND_COLOR_PRIMARY, FOOTER_TEXT_1, FOOTER_TEXT_3, PRIMARY} from '../theme/colors.js';
import {Hr} from '../theme/globalStyle';

const FooterWrapper = styled.footer`
  background: ${FOOTER_BACKGROUND_COLOR_PRIMARY};
`;

const AuthorPane = styled.div`
  color: ${FOOTER_TEXT_3};
`;

const FooterHeader = styled.h1`
  text-align: center;
  color: ${FOOTER_TEXT_1};
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2;
`;

const InfoRow = styled.p`
  text-align: center;
  font-weight: bolder;
  line-height: 1;
  color: ${FOOTER_TEXT_1};
`;

const LinkCustom = styled.a`
  color: ${FOOTER_TEXT_1};
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s;
  &&:hover {
    transition: all 0.5s;
    color: ${PRIMARY};
  }
`;

const Footer = () => {
    const author = base['DEVELOPER'];
    const company = base['COMPANY'];

    return (
        <FooterWrapper>
            <Container>
                <Row className="pt-4">
                    <Col md={4} className="">
                        <FooterHeader>{company.name}</FooterHeader>
                        <InfoRow className="" style={{fontSize: '4em'}}>
                            <LinkCustom href={company.links.facebook}>
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                            </LinkCustom>
                            <LinkCustom href={company.links.linkedin}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </LinkCustom>
                            <LinkCustom href={company.links.instagram}>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </LinkCustom>
                        </InfoRow>
                    </Col>
                    <Col md={4}>
                        <FooterHeader>Sídlo firmy</FooterHeader>
                        <InfoRow>
                            {company.address.street}, {company.address.number}
                        </InfoRow>
                        <InfoRow>
                            {company.address.city}, {company.address.zip}
                        </InfoRow>
                    </Col>
                    <Col md={4}>
                        <FooterHeader>Kontaktní osoba</FooterHeader>
                        <InfoRow>{company.contact.name}</InfoRow>
                        <InfoRow>Tel: {company.contact.tel1}</InfoRow>
                        <InfoRow>Tel: {company.contact.tel2}</InfoRow>
                        <InfoRow>Email: {company.contact.email}</InfoRow>
                    </Col>
                </Row>
            </Container>
            <AuthorPane className="text-center pb-3">
                <Hr/>
                {`© ${author.year} Copyright: Created by ${author.author}`}
            </AuthorPane>
        </FooterWrapper>
    );
};

export default Footer;
