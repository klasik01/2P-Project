import React from 'react';
import {BannerHeader} from './BannerHeader';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'reactstrap';

export const ArticleLayout = (props) => {
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

ArticleLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    header: PropTypes.string.isRequired,
    footer: PropTypes.string
};

export const DefaultLayout = (props) => {
    const {children, header, error} = props;

    if (error) {
        return (
            <div>
                <BannerHeader header={header}/>
                <Container>
                    <Row>
                        <div className="text-center p-3 text-danger font-weight-bold">{error}</div>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <BannerHeader header={header}/>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    header: PropTypes.string.isRequired,
    error: PropTypes.string,
};
