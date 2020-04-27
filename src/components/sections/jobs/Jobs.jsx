import React from 'react';
import {ArticleLayout} from '../../common/Layout';
import {FullColumn} from '../../common/BlockLayout';

const Jobs = () => {

    const jobsData = [
        {
            'id': 1,
            'contract': 'Pozice Dělník',
            'sections': [
                {
                    'id': '1-required',
                    'title': 'Požadujeme',
                    'list': [
                        'Todo',
                        'Todo',
                        'Todo',
                        'Todo',
                    ]
                },
                {
                    'id': '1-description',
                    'title': 'Náplň práce',
                    'list':
                        [
                            'Todo',
                            'Todo',
                            'Todo',
                            'Todo',
                        ]
                },
                {
                    'id': '1-benefits',
                    'title': 'Nabízíme',
                    'list': [
                        'Todo',
                        'Todo',
                        'Todo',
                        'Todo',
                    ]
                },
            ]
        }
    ];

    return (
        <ArticleLayout header="Hledáte zaměstnání?" footer="">
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
                imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris elementum mauris vitae tortor. Aenean vel massa
                quis mauris vehicula lacinia. Vivamus ac leo pretium faucibus. Nulla turpis magna, cursus sit amet,
                suscipit a, interdum id, felis. Nulla est. Aliquam erat volutpat. Pellentesque ipsum. Fusce nibh.
                Aliquam in lorem sit amet leo accumsan lacinia. Aenean fermentum risus id tortor. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                doloribus asperiores repellat. Nullam at arcu a est sollicitudin euismod. Maecenas sollicitudin. Aenean
                placerat.</p>

            <h2 className="border-bottom border-danger font-weight-bold">Hledáme zaměstance na tyto pozice:</h2>
            {jobsData.map(item =>
                <FullColumn key={item.id}>
                    <h3 className="font-weight-bold">{item.contract}</h3>
                    {item.sections.map(data => <div key={data.id}>
                        <h4>{data.title}</h4>
                        <ul>
                            {data.list.map((listItem, index) => <li key={data.id + '-' + index}>{listItem}</li>)}
                        </ul>
                    </div>)}
                </FullColumn>
            )}
        </ArticleLayout>
    );
};


export default Jobs;