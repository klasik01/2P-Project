import React from 'react';
import {ArticleLayout} from '../common/Layout';
import MapComponent from '../common/MapComponent';
import {Hr} from '../../theme/globalStyle';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';
import base from '../../data/baseInfo.json';


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

    const address = base['COMPANY']['address'];
    const contact = base['COMPANY']['contact'];
    const residence = base['COMPANY']['residence'];

    return (
        <ArticleLayout header="Kontakt" footer="">
            <Row>
                <ContactItem
                    data={[`${address.street} ${address.number}`, `${address.city} ${address.zip}`]}
                    header="Sídlo firmy"
                />
                <ContactItem
                    data={[`${residence.street} ${residence.number}`,`${residence.city} ${residence.zip}`,`${residence.tel1}`,
                        <a key="1" href={`mailTo:${residence.email}`}>{residence.email}`</a>]}
                    header="PROVIZORNÍ PROVOZOVNA"
                />
                <ContactItem
                    data={[`${contact.name}`,`${contact.position}`,`${contact.tel1}`,
                        <a key="1" href={`mailTo:${contact.email}`}>{contact.email}`</a>]}
                    header="KONTAKTNÍ OSOBA"
                />
                <Hr/>
            </Row>
            <MapComponent/>
        </ArticleLayout>
    );
};


export default Contact;