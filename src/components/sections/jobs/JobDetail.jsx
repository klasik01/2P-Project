import {ArticleLayout} from '../../common/Layout';
import {FullColumn} from '../../common/BlockLayout';
import PropTypes from 'prop-types';
import React from 'react';

const JobDetail = (props) => {

    const { header } = props;

    return (
        <ArticleLayout header={header} footer="">
            <FullColumn>
                Detail job
            </FullColumn>
        </ArticleLayout>
    );
};

JobDetail.propTypes = {
    header: PropTypes.string
};

export default JobDetail;