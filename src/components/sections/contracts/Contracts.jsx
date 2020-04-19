import React from 'react';
import {ArticleLayout} from '../../common/Layout';
import image from '../../../images/house.jpg';
import {FullColumn} from '../../common/BlockLayout';
import {ContractCard, contractsData} from '../../home/common/Contracts';

const Contracts = () => {
    return (
        <ArticleLayout header="Realizované zakázky" footer="">
            <FullColumn>
                <div className="container mt-40">
                    <div className="row mt-30">
                        {contractsData.map(item =>
                            <ContractCard
                                key={item.id} title={item.title} icon={'hammer'} image={image}
                                to={item.to + item.id}/>
                        )}
                    </div>
                </div>
            </FullColumn>
        </ArticleLayout>
    );
};

export default Contracts;