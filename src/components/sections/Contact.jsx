import React from 'react';
import {ArticleLayout} from '../common/Layout';
import MapComponent from '../common/MapComponent';
import {Hr} from '../../theme/globalStyle';

const Contact = () => {
    return (
        <ArticleLayout header="Kontakt" footer="">
            <h2>Sídlo firmy</h2>
            <label>Pacov</label>
            <label>Naměstíí čp.</label>
            <label>tel: +420 132 456 789</label>
            <label><a href={'mailTo:email@email.com'}>email@emailc.om</a></label>
            <label>IČ</label>
            <label>DIČ</label>
            <h2>Kontaktní osoba</h2>
            <label>Pavel Pinkas</label>
            <label>tel: +420 132 456 789</label>
            <label>tel: +420 132 456 789</label>
            <label><a href={'mailTo:email@email.com'}>email@emailc.om</a></label>
            <h2>Další kontakt</h2>
            <label>Pavel Pinkas</label>
            <label>tel: +420 132 456 789</label>
            <label>tel: +420 132 456 789</label>
            <label><a href={'mailTo:email@email.com'}>email@emailc.om</a></label>
            <Hr/>
            <MapComponent/>
        </ArticleLayout>
    );
};


export default Contact;