import React, {useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import MapComponent from '../../common/MapComponent';
import {Hr} from '../../../theme/globalStyle';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import data from '../../../data/company-info.json';
import textsData from '../../../data/texts.json';
import {FOOTER_TEXT_1, FOOTER_TEXT_2} from '../../../theme/colors';
import {PrimaryButton} from '../../common/Button';
import {SocialIcon} from 'react-social-icons';

const ItemHeader = styled.h1`
  color: ${FOOTER_TEXT_1};
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2;
`;

const ItemInfoRow = styled.p`
  line-height: 1;
  color: ${FOOTER_TEXT_2};
`;

const ContactItemWrapper = styled.div`
`;

const ContactItem = ({header = 'Header', data = []}) => {
    return (
        <ContactItemWrapper className="col-md-4">
            <h2>{header}</h2>
            {data.map((item, index) => <p key={index}>{item}</p>)}
        </ContactItemWrapper>
    );
};

ContactItem.propTypes = {
    header: PropTypes.string,
    data: PropTypes.array
};


const Contact = () => {

    const [companyData] = useState(data['COMPANY']);
    const [contactData] = useState(textsData['PAGE_CONTACT']);

    const {residence, address, contact, links} = companyData;

    return (
        <ArticleLayout header={contactData.header} footer="">
            <Row>
                <Col md={6}>
                    <label>{contactData.text}</label>
                    <Hr/>
                    <ItemHeader>{contact.type}</ItemHeader>
                    <ItemInfoRow>{contact.name}</ItemInfoRow>
                    <ItemInfoRow>{contact.position}</ItemInfoRow>
                    <ItemInfoRow bold>{contact.email}</ItemInfoRow>
                    <ItemInfoRow bold>{contact.tel1}</ItemInfoRow>
                    <ItemInfoRow bold>{contact.emailAlt}</ItemInfoRow>

                    <Hr/>
                    <div className="text-center">
                        {links.map((item, index) => {
                            return (
                                <span className="pb-3 m-3" key={index}>
                                    <SocialIcon url={item}/>
                                </span>
                            );
                        })}
                    </div>
                    <Hr/>
                    <div className=" p-3 mb-4">
                        <Form>
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
                                        <Label for="exampleCheck" check>{contactData.condition}</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={6} className="float-right right text-right">
                                    <FormGroup check row>
                                        <PrimaryButton className="">{contactData.buttonTitle}</PrimaryButton>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
                <Col md={6}>
                    <MapComponent/>
                    <Hr/>
                    <ItemHeader>{address.type}</ItemHeader>
                    <ItemInfoRow>{address.street}, {address.number}</ItemInfoRow>
                    <ItemInfoRow>{address.city}, {address.zip}</ItemInfoRow>
                    <ItemHeader>{residence.type}</ItemHeader>
                    <ItemInfoRow>{residence.street}, {residence.number}</ItemInfoRow>
                    <ItemInfoRow>{residence.city}, {residence.zip}</ItemInfoRow>
                    <ItemInfoRow>T{residence.tel1}</ItemInfoRow>
                    <ItemInfoRow>{residence.email}</ItemInfoRow>
                </Col>
            </Row>
        </ArticleLayout>
    );
};


export default Contact;