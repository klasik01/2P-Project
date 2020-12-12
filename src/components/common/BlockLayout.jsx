import React from 'react';
import styled from 'styled-components';
import {PRIMARY, PRIMARY_TO} from '../../theme/colors';
import PropTypes from 'prop-types';

const DefaultSection = styled.section`
    padding: 0 20px;
    background: ${props => props.background ? `linear-gradient(to right, ${PRIMARY + 'CD'}, ${PRIMARY_TO + 'FF'})` : ''};
    clip-path: polygon(${props => props.polygon ? '0 10%, 100% 0, 100% 90%, 0 100%' : '0 0, 0 100%, 100% 100%, 100% 0'});
`;

export const DefaultSectionContainer = (props) => {
    const {isBackground, isPolygon, children} = props;
    return (
        <DefaultSection className="py-5" background={isBackground} polygon={isPolygon}>
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </DefaultSection>
    );
};

DefaultSectionContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isBackground: PropTypes.bool,
    isPolygon: PropTypes.bool,
};

export const SmallColumn = (props) => {
    const {children, className} = props;
    return (
        <div className={`col-lg-4 ${className}`}>
            <div className="p-2">
                {children}
            </div>
        </div>
    );
};

SmallColumn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string
};

export const LargeColumn = (props) => {
    const {children, className} = props;
    return (
        <div className={`col-lg-8 ${className} `}>
            <div className="row clearfix">
                {children}
            </div>
        </div>
    );
};

LargeColumn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string
};

export const FullColumn = (props) => {
    const {children, className} = props;
    return (
        <div className={`${className} col-12`}>
            <div className="py-2">
                {children}
            </div>
        </div>
    );
};

FullColumn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string
};