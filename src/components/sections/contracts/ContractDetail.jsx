import {DefaultLayout} from '../../common/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import {Table} from 'reactstrap';
import {FullColumn} from '../../common/BlockLayout';

const ContractDetail = (props) => {

    const {
        header = 'Rekonstrukce Barabizna Pešek',
        data = {
            cost: '0,- Kč',
            startDate: '2019-12-12',
            endDate: '2019-12-12',
            investor: 'Nevím někdo',
            manager: 'Moje maličkost',
            dodavatel: 'Všichni moji lidi'
        },
        text = [
            `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
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
             placerat.`,
            `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
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
             placerat.`
        ]
    } = props;


    return (
        <DefaultLayout header={header} footer="">
            <div className="col-md-8 py-4">
                <div className="">
                    {text.map((item, index) => <p key={index} className="text-justify">{item}</p>)}
                </div>
            </div>
            <div className="col-md-4 py-md-4">
                <div className="">
                    <Table responsive hover striped>
                        <thead>
                            <tr>
                                <th colSpan={2}>Základní informace</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Finanční objnem</th>
                                <td>{data.cost}</td>
                            </tr>
                            <tr>
                                <th>Termín zahájení</th>
                                <td>{data.startDate}</td>
                            </tr>
                            <tr>
                                <th>Termín dokončení</th>
                                <td>{data.endDate}</td>
                            </tr>
                            <tr>
                                <th>Investor</th>
                                <td>{data.investor}</td>
                            </tr>
                            <tr>
                                <th>Projektant</th>
                                <td>{data.manager}</td>
                            </tr>
                            <tr>
                                <th>Dodavatelé</th>
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