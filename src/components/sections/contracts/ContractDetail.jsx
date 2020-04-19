import {ArticleLayout} from '../../common/Layout';
import {FullColumn} from '../../common/BlockLayout';
import PropTypes from 'prop-types';
import React from 'react';

const ContractDetail = (props) => {

    const { header } = props;

    return (
        <ArticleLayout header={header} footer="">
            <FullColumn>
                Název
                Popis
                Obrázky
                Kalkulace (Cena info atd)
            </FullColumn>
        </ArticleLayout>
    );
};

ContractDetail.propTypes = {
    header: PropTypes.string
};

export default ContractDetail;