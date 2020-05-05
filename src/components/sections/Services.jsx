import React from 'react';
import {ArticleLayout} from '../common/Layout';
import {IconWrapper, MyFontAwesomeIcon} from "../common/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Hr} from "../../theme/globalStyle";

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
        }, {
            key: 2,
            title: 'Rozpočtářské služby',
            paragraph: 'Vytváření, úpravy a poradenství',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'calculator'
        }, {
            key: 3,
            title: 'Výplně otvorů',
            paragraph: 'Zajištění dodávky a montáže plastových výplní otvorů',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'tools'
        }, {
            key: 4,
            title: 'Stavební dozor',
            paragraph: 'Zajištění stavebního dozoru staveb',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'user-tie'
        }, {
            key: 5,
            title: 'Inženýrská činnost',
            paragraph: 'Zajištění poradenství a koordinace subdodávek na stavbách prováděných svépomocí',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'ruler-combined'
        }, {
            key: 6,
            title: 'Oceňování nemovitostí',
            paragraph: 'Ocenění nemovitostí vyhláškovou nebo tržní metodou',
            list: [{id: '1', text: 'TODO'}, {id: '2', text: 'TODO'}, {id: '3', text: 'TODO'}, {
                id: '4',
                text: 'TODO'
            }, {id: '5', text: 'TODO'}],
            icon: 'money-bill'
        },
    ];

    return (
        <ArticleLayout header="Jaké služby nabízíme?" footer="">
            {data.map(item =>
                <div key={item.key} className="">
                    <div className="row py-2">
                        <div className="col-md-4 justify-content-center align-self-center">
                            <IconWrapper className="fa-stack fa-6x" color={'white'}>
                                <MyFontAwesomeIcon className="fas fa-stack-2x" icon="circle"/>
                                <FontAwesomeIcon className="fas  fa-stack-1x" icon={item.icon}/>
                            </IconWrapper>
                        </div>
                        <div className="col-md-8">
                            <h2>{item.title}</h2>
                            <hr/>
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


            <p className="text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
                imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris elementum mauris vitae tortor. Aenean vel massa
                quis mauris vehicula lacinia. Vivamus ac leo pretium faucibus. Nulla turpis magna, cursus sit amet,
                suscipit a, interdum id, felis. Nulla est. Aliquam erat volutpat. Pellentesque ipsum. Fusce nibh.
                Aliquam in lorem sit amet leo accumsan lacinia. Aenean fermentum risus id tortor. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                doloribus asperiores repellat. Nullam at arcu a est sollicitudin euismod. Maecenas sollicitudin. Aenean
                placerat.</p>
        </ArticleLayout>
    );
};


export default Services;