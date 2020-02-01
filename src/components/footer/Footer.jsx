import React from 'react';
import styled from 'styled-components';

import base from '../../data/baseInfo.json';
import { Col, Row, Table } from 'reactstrap';


const FooterWrapper = styled.footer`
`;

const AuthorPane = styled.div`
`;


const Footer = (props) => {

    const author = base['DEVELOPER'];

    return (
        <FooterWrapper className="dark">
            <hr />
            <Row>
                <Col md={4}>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th>Společnost:</th>
                                <td>2P Stavební</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Table borderless>
                        <tbody className="d-block">
                            <tr>
                                <th rowSpan={3}>Kontakty:</th>
                                <td>+420 123 456 789</td>
                            </tr>
                            <tr>
                                <td>+420 987 654 321</td>
                            </tr>
                            <tr>
                                <td>pavel@pinkas.cz</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Table borderless>
                        <tbody className="d-block">
                            <tr >
                                <th rowSpan={3}>Adresa:</th>
                                <td>Ulice, čp</td>
                            </tr>
                            <tr>
                                <td>Město, PSČ</td>
                            </tr>
                            <tr>
                                <td>Dodatek</td>
                            </tr>
                        </tbody>
                    </Table></Col>
            </Row>

            <AuthorPane className="text-center">
                <hr />
                {`© ${author.year} Copyright: Created by ${author.author}`}
                <hr />
            </AuthorPane>
        </FooterWrapper>
    )
}


export default Footer;