import React, {useEffect, useState} from 'react';
import {ArticleLayout} from '../../common/Layout';
import image from '../../../images/house.jpg';
import {FullColumn} from '../../common/BlockLayout';
import {ContractCard} from '../../home/common/Contracts';

const Contracts = () => {

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        setContracts([
            {id: 1, title: 'RD Pelhřimov - 3 bytové jednotky', icon: 'pen', image: image, to: '/projects/view/'},
            {
                id: 2,
                title: 'ŽB konstrukce ve výbušném prostředí Sellier Bellot',
                icon: 'pen',
                image: image,
                to: '/projects/view/'
            },
            {id: 3, title: 'Protipožární ucpávky hala DDL Humpolec', icon: 'pen', image: image, to: '/projects/view/'},
            {id: 4, title: 'Rekonstrukce Obecního úřadu Vyklantice', icon: 'pen', image: image, to: '/projects/view/'},
        ]);
    }, []);

    return (
        <ArticleLayout header="Realizované zakázky" footer="">
            <FullColumn>
                <div className="container mt-40">
                    <div className="row mt-30">
                        {contracts.map(item =>
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