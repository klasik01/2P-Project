import React from 'react';
import {BannerHeader} from './BannerHeader';
import PropTypes from 'prop-types';
import {Container} from 'reactstrap';

export const Layout = (props) => {
    const {children, header, footer} = props;

    return (
        <div>
            <BannerHeader header={header}/>
            <Container>
                {children}
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