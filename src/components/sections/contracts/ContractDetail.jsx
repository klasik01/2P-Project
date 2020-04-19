import {DefaultLayout} from '../../common/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import {Table} from 'reactstrap';
import {FullColumn} from "../../common/BlockLayout";

const ContractDetail = (props) => {

    const {
        header = 'Rekonstrukce Barabizna Pešek', text,
        data = {
            cost: '0,- Kč',
            startDate: '2019-12-12',
            endDate: '2019-12-12',
            investor: 'Nevím někdo',
            manager: 'Moje maličkost',
            dodavatel: 'Všichni moji lidi'
        }
    } = props;


    return (
        <DefaultLayout header={header} footer="">
            <div className="col-md-8 py-4">
                <div className="">
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
                        imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris elementum mauris vitae tortor. Aenean
                        vel massa
                        quis mauris vehicula lacinia. Vivamus ac leo pretium faucibus. Nulla turpis magna, cursus sit
                        amet,
                        suscipit a, interdum id, felis. Nulla est. Aliquam erat volutpat. Pellentesque ipsum. Fusce
                        nibh.
                        Aliquam in lorem sit amet leo accumsan lacinia. Aenean fermentum risus id tortor. Itaque earum
                        rerum hic
                        tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                        perferendis
                        doloribus asperiores repellat. Nullam at arcu a est sollicitudin euismod. Maecenas sollicitudin.
                        Aenean
                        placerat.</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
                        imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris elementum mauris vitae tortor. Aenean
                        vel massa
                        quis mauris vehicula lacinia. Vivamus ac leo pretium faucibus. Nulla turpis magna, cursus sit
                        amet,
                        suscipit a, interdum id, felis. Nulla est. Aliquam erat volutpat. Pellentesque ipsum. Fusce
                        nibh.
                        Aliquam in lorem sit amet leo accumsan lacinia. Aenean fermentum risus id tortor. Itaque earum
                        rerum hic
                        tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                        perferendis
                        doloribus asperiores repellat. Nullam at arcu a est sollicitudin euismod. Maecenas sollicitudin.
                        Aenean
                        placerat.</p>
                </div>
            </div>
            <div className="col-md-4 py-4">
                <div className="">
                    <Table responsive hover striped>
                        <thead>
                            <th colSpan={2}>Základní informace</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Finanční objem</td>
                                <td>{data.cost}</td>
                            </tr>
                            <tr>
                                <td>Termín zahájení</td>
                                <td>{data.startDate}</td>
                            </tr>
                            <tr>
                                <td>Termín dokončení</td>
                                <td>{data.endDate}</td>
                            </tr>
                            <tr>
                                <td>Investor</td>
                                <td>{data.investor}</td>
                            </tr>
                            <tr>
                                <td>Projektant</td>
                                <td>{data.manager}</td>
                            </tr>
                            <tr>
                                <td>Dodavatelé</td>
                                <td>{data.dodavatel}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <FullColumn>
                Kolekce obrázků
            </FullColumn>
        </DefaultLayout>
    );
};

ContractDetail.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object
};

export default ContractDetail;