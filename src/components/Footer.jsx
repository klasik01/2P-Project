import React, {useState} from 'react';
import styled from 'styled-components';
import companyInfoData from '../data/company-info.json';
import applicationData from '../data/website.json';
import textsData from '../data/texts.json';
import {Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {FOOTER_BACKGROUND_COLOR_PRIMARY, FOOTER_TEXT_1, FOOTER_TEXT_3} from '../theme/colors.js';
import {FullColumn} from './common/BlockLayout';
import {PrettyHeader} from './common/Typography';
import {PrimaryButton} from './common/Button';
import {FOOTER_TEXT_2} from '../theme/colors';
import {SocialIcon} from 'react-social-icons';


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

    const handleSubmit = ( event, v) => {
        event.preventDefault();
        console.log('Email', { event , v});
    };

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
                        <div className="border border-light p-3 mb-4">
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input type="email" name="email" id="inputEmail" placeholder="Email..."/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" name="text" id="inputText" placeholder="Zpráva..."/>
                                </FormGroup>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup check>
                                            <Input type="checkbox" name="check" id="exampleCheck"/>
                                            <Label for="exampleCheck" check>{footer.condition}</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6} className="float-right right text-right">
                                        <FormGroup check row>
                                            <PrimaryButton>{footer.buttonTitle}</PrimaryButton>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="text-center">
                            {links.map((item, index) => {
                                return (
                                    <span className="pb-3 m-3" key={index}>
                                        <SocialIcon url={item}/>
                                    </span>
                                );
                            })}
                        </div>
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
