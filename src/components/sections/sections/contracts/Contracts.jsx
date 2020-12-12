import React, { useState } from 'react';
import {ArticleLayout} from '../../../common/Layout';
import image from '../../../../images/house.jpg';
import {FullColumn} from '../../../common/BlockLayout';
import {ContractCard} from '../../../home/common/Contracts';

import contractsData from '../../../../data/orders.json';
import textsData from '../../../../data/texts.json';

const Contracts = () => {

    const [contracts] = useState(contractsData['LIST']);
    const [texts] = useState(textsData['CONTRACT']);

    return (
        <ArticleLayout header={texts.title} footer="">
            <FullColumn>
                <div className="container mt-40">
                    <div className="row mt-30">
                        {contracts.map(item =>
                            <ContractCard
                                key={item.id} title={item.title} image={image}
                                to={item.to + item.id}/>
                        )}
                    </div>
                </div>
            </FullColumn>
        </ArticleLayout>
    );
};

export default Contracts;