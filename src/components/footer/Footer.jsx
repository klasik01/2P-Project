import React from 'react';
import styled from 'styled-components';

import base from '../../data/baseInfo.json';
import { Col, Row } from 'reactstrap';


const FooterWrapper = styled.footer``;

const AuthorPane = styled.div`
    text-align: center;
`;


const Footer = (props) => {

    const author = base['DEVELOPER'];

    return (
        <FooterWrapper>
            <Row>
                <Col>
                </Col>
            </Row>

            <AuthorPane>
                <hr />
                {`Created by ${author.author}, in ${author.year}`}
                <hr />
            </AuthorPane>
        </FooterWrapper>
    )
}


export default Footer;