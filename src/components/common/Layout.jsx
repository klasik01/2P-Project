import React from 'react';
import {BannerHeader} from './BannerHeader';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'reactstrap';

export const Layout = (props) => {
    const {children, header, footer} = props;

    return (
        <div>
            <BannerHeader header={header}/>
            <Container>
                <Row>
                    <Col className="p-3">
                        {children}
                    </Col>
                </Row>
                <div>{footer}</div>
            </Container>
        </div>

    );
};

Layout.propTypes = {
    children: PropTypes.object,
    header: PropTypes.string.isRequired,
    footer: PropTypes.string
};