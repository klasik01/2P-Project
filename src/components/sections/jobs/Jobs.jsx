import React from 'react';
import {ArticleLayout} from '../../common/Layout';
import {Col, Row} from "reactstrap";

const Jobs = () => {


    const jobsData = [
        {
            'id': 1,
            'contract': 'Pomocný dělník',
            'sections': [
                {
                    'id': '1-required',
                    'title': 'Požadujeme',
                    'list': [
                        'Základní vzdělání',
                        'Praxe na obdobné pozici',
                    ]
                },
                {
                    'id': '1-description',
                    'title': 'Náplň práce',
                    'list':
                        [
                            'Práce na stavbách',
                        ]
                },
                {
                    'id': '1-benefits',
                    'title': 'Nabízíme',
                    'list': [
                        'Zajímavé finanční ohodnocení',
                        'Odměny za dobře odvedenou práci',
                        'Možnost kariérního růstu',
                    ]
                },
            ]
        },
        {
            'id': 2,
            'contract': 'Stavební dělník',
            'sections': [
                {
                    'id': '2-required',
                    'title': 'Požadujeme',
                    'list': [
                        'Základní vzdělání',
                        'Praxe na obdobné pozici',
                    ]
                },
                {
                    'id': '2-description',
                    'title': 'Náplň práce',
                    'list':
                        [
                            'Práce na stavbách',
                        ]
                },
                {
                    'id': '2-benefits',
                    'title': 'Nabízíme',
                    'list': [
                        'Zajímavé finanční ohodnocení',
                        'Odměny za dobře odvedenou práci',
                        'Možnost kariérního růstu',
                    ]
                },
            ]
        },
        {
            'id': 3,
            'contract': 'Stavební dělník',
            'sections': [
                {
                    'id': '3-required',
                    'title': 'Požadujeme',
                    'list': [
                        'Základní či střední vzdělání',
                        'Praxe na obdobné pozici min 2 roky',
                    ]
                },
                {
                    'id': '3-description',
                    'title': 'Náplň práce',
                    'list':
                        [
                            'Práce na stavbách',
                            'Organizace a plánování',
                            'Vedení samostatné skupiny'
                        ]
                },
                {
                    'id': '3-benefits',
                    'title': 'Nabízíme',
                    'list': [
                        'Zajímavé finanční ohodnocení',
                        'Odměny za dobře odvedenou práci',
                        'Možnost kariérního růstu',
                        'Firemní automobil a telefon'
                    ]
                },
            ]
        }
    ];

    return (
        <ArticleLayout header="Hledáte zaměstnání?" footer="">
            {/*<p className="text-justify">Hledáme do našeho týmu nové pracovníky. Nebojte se nám ozvat.</p>*/}

            <h2 className="border-bottom border-danger font-weight-bold">Hledáme zaměstance na tyto pozice:</h2>
            <Row>
                {jobsData.map(item =>
                    <Col md={5} key={item.id} className="m-1 card card-body bg-light">
                        <h3 className="font-weight-bold">{item.contract}</h3>
                        {item.sections.map(data => <div key={data.id}>
                            <h4>{data.title}</h4>
                            <ul>
                                {data.list.map((listItem, index) => <li key={data.id + '-' + index}>{listItem}</li>)}
                            </ul>
                        </div>)}
                    </Col>
                )}
            </Row>
        </ArticleLayout>
    );
};


export default Jobs;