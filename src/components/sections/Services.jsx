import React from 'react';
import {ArticleLayout} from '../common/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Hr} from '../../theme/globalStyle';

const Services = () => {

    const data = [
        {
            key: 1,
            title: 'Stavební práce',
            paragraph: 'Veškeré stavební práce',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'hammer'
        },
        {
            key: 3,
            title: 'Výplně otvorů',
            paragraph: 'Zajištění dodávky a montáže plastových výplní otvorů',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'tools'
        },
        {
            key: 6,
            title: 'Protipožární ucpávky',
            paragraph: 'Odborná montáž vč. protokolů protipožárních ucpávek',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'money-bill'
        },
        {
            key: 2,
            title: 'Rozpočtářské služby',
            paragraph: 'Vytváření, úpravy a poradenství',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'calculator'
        },
        {
            key: 4,
            title: 'Stavební dozor',
            paragraph: 'Zajištění stavebního dozoru staveb',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'user-tie'
        },
        {
            key: 5,
            title: 'Inženýrská činnost',
            paragraph: 'Zajištění poradenství a koordinace subdodávek na stavbách prováděných svépomocí',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'ruler-combined'
        },
    ];

    return (
        <ArticleLayout header="Jaké služby nabízíme?" footer="">
            {data.map(item =>
                <div key={item.key} className="" id={item.key}>
                    <div className="row py-2 card card-body bg-light">
                        <div className="col">
                            <h2><FontAwesomeIcon className="fas" icon={item.icon}/>&nbsp;{item.title}</h2>
                            <i className="text-justify">{item.paragraph}</i>
                            <hr/>
                            <ul>
                                {item.list.map(todo => <li key={todo.id}>{todo.text}</li>)}
                            </ul>
                        </div>
                    </div>
                    <Hr/>
                </div>
            )}

            <p className="text-justify"></p>
        </ArticleLayout>
    );
};


export default Services;