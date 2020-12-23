import React, {useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import MapComponent from '../../common/MapComponent';
import {Hr} from '../../../theme/globalStyle';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import data from '../../../data/company-info.json';
import textsData from '../../../data/texts.json';
import {FOOTER_TEXT_1, FOOTER_TEXT_2} from '../../../theme/colors';
import {EmailComponent} from '../../common/Email';
import {SocialIcons} from '../../common/SocialIcons';

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

    const {residence, address, contact, links, nextContacts } = companyData;

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
                    { nextContacts.map(item => {
                        return (
                            <>
                                <ItemHeader>{item.type}</ItemHeader>
                                <ItemInfoRow>{item.name}</ItemInfoRow>
                                <ItemInfoRow>{item.position}</ItemInfoRow>
                                <Hr/>
                            </>
                        );
                    })}
                    <SocialIcons data={links}/>
                    <Hr/>
                    <EmailComponent text={contactData}/>
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
