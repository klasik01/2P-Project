import React from 'react';
import {PrettyHeader} from '../../common/PretyHeader';
import OrderModal from "./OrderModal";


const Order = (props) => {

    return (
        <div className="row text-center align-items-center justify-content-center">
            <PrettyHeader>Nezávazná kalkulace</PrettyHeader>
            <p></p>
            <OrderModal buttonLabel="Vytvořit kalkulaci"/>
        </div>
    )
};

export default Order;