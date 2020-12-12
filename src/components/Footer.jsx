import React, {useState} from 'react';
import styled from 'styled-components';
import companyInfoData from '../data/company-info.json';
import applicationData from '../data/website.json';
import textsData from '../data/texts.json';
import {Col, Container, Row} from 'reactstrap';
import {FOOTER_BACKGROUND_COLOR_PRIMARY, FOOTER_TEXT_1, FOOTER_TEXT_3} from '../theme/colors.js';
import {FullColumn} from './common/BlockLayout';
import {PrettyHeader} from './common/Typography';
import {FOOTER_TEXT_2} from '../theme/colors';
import {EmailComponent} from "./common/Email";
import {SocialIcons} from "./common/SocialIcons";


const FooterWrapper = styled.footer`
  background: ${FOOTER_BACKGROUND_COLOR_PRIMARY};
`;

const AuthorPane = styled.div`
  color: ${FOOTER_TEXT_3};
`;

const FooterHeader = styled.h1`
  color: ${FOOTER_TEXT_1};
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2;
`;

const InfoRow = styled.p`
  line-height: 1;
  color: ${FOOTER_TEXT_2};
`;

const Footer = ({visible}) => {
    const [author] = useState(applicationData['DEVELOPER']);
    const [companyData] = useState(companyInfoData['COMPANY']);
    const [footer] = useState(textsData['CONTACT']);

    const {address, residence, links} = companyData;

    return (
        <FooterWrapper>
            {visible && <Container>
                <Row className="pt-4">
                    <FullColumn>
                        <div className="col text-center">
                            <PrettyHeader>{footer.title}</PrettyHeader>
                        </div>
                    </FullColumn>
                    <Col md={6} className="pb-3">
                        <EmailComponent text={footer}/>
                        <SocialIcons data={links}/>
                    </Col>
                    <Col md={6} className="px-3">
                        <div>
                            <FooterHeader>{address.type}</FooterHeader>
                            <InfoRow>{address.street}, {address.number}</InfoRow>
                            <InfoRow>{address.city}, {address.zip}</InfoRow>
                            <FooterHeader>{residence.type}</FooterHeader>
                            <InfoRow>{residence.street}, {residence.number}</InfoRow>
                            <InfoRow>{residence.city}, {residence.zip}</InfoRow>
                            <InfoRow>T{residence.tel1}</InfoRow>
                            <InfoRow>{residence.email}</InfoRow>
                        </div>
                    </Col>
                </Row>
            </Container>
            }
            <AuthorPane className="text-center p-2 bg-light">
                <label style={{fontSize: '10px'}}>{`© ${author.year} Copyright: Created by ${author.author}`}</label>
            </AuthorPane>
        </FooterWrapper>
    );
};

export default Footer;
