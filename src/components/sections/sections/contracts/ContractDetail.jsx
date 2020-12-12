import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {DefaultLayout} from '../../../common/Layout';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import {FullColumn} from '../../../common/BlockLayout';
import contractsData from '../../../../data/orders.json';

const ContractDetail = () => {
    const history = useHistory();
    const { id = false } = useParams();

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!id) {
            history.push('/projects');
        }

        const findItem = contractsData['DETAIL'][id];

        if (findItem) {
            setItem(findItem);
            setIsLoading(false);
        } else {
            setError('Invalid items');
            history.push('/projects');
            console.log('Invalid items');
        }
    }, [history, id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <DefaultLayout header={item.title} footer="">
            <div className="col-md-8 py-4">
                <div className="">
                    {item.description.map((item, index) => <p key={index} className="text-justify">{item}</p>)}
                </div>
            </div>
            <div className="col-md-4 py-md-4">
                <div className="">
                    <Table responsive hover striped>
                        <thead>
                            <tr>
                                <th colSpan={2}>{item.attributesHeader}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(item.attributes).map((attr, i) => {
                                    if (Array.isArray(item.attributes[attr])) {
                                        return (
                                            <tr key={i}>
                                                <th>{attr}</th>
                                                <td>{item.attributes[attr].join(', ')}</td>
                                            </tr>
                                        );
                                    } else {
                                        return (
                                            <tr key={i}>
                                                <th>{attr}</th>
                                                <td>{item.attributes[attr]}</td>
                                            </tr>
                                        );
                                    }
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <FullColumn>

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