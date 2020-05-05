import React from 'react';
import {ArticleLayout} from '../common/Layout';
import MapComponent from '../common/MapComponent';
import {Hr} from '../../theme/globalStyle';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';

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
    return (
        <ArticleLayout header="Kontakt" footer="">
            <Row>
                <ContactItem
                    data={['Pacov', 'Náměstí čp.', 'tel: +420 132 456 789',
                        <a key="1" href={'mailTo:email@email.com'}>email@emailc.om</a>, 'DIČ', 'IČ']}
                    header="Sídlo firmy"
                />
                <ContactItem
                    data={['Pavel Pinkas', 'tel: +420 132 456 789', 'tel: +420 132 456 789',
                        <a key="1" href={'mailTo:email@email.com'}>email@emailc.om</a>]}
                    header="Kontaktní osoba"
                />
                <ContactItem
                    data={['Další osoba', 'tel: +420 132 456 789', 'tel: +420 132 456 789',
                        <a key="1" href={'mailTo:email@email.com'}>email@emailc.om</a>]}
                    header="Další kontakt"
                />
                <Hr/>
            </Row>
            <MapComponent/>
        </ArticleLayout>
    );
};


export default Contact;