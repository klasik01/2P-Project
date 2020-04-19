import React from 'react';
import {ArticleLayout} from '../common/Layout';
import {FullColumn} from "../common/BlockLayout";
import workerWorkerImg from "../../images/worker-svg.svg";
import workerMisterImg from "../../images/worker-mister.svg";
import {JobCard} from "../home/common/Jobs";

const Jobs = () => {

    const jobsData = [
        {
            'id': 1,
            'contract': 'Pozice Dělník',
            'description': 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm',
            'img': workerWorkerImg,
            'icon': '',
            'to': '/jobs/1'
        }, {
            'id': 2,
            'contract': 'Pozice Mistr',
            'description': 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm',
            'img': workerMisterImg,
            'icon': 'hammer',
            'to': '/jobs/2'
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

            <FullColumn>
                {jobsData.map(item =>
                    <JobCard
                        key={item.id}
                        title={item.contract}
                        paragraph={item.description}
                        image={item.img}
                        to={item.to}/>
                )}
            </FullColumn>
        </ArticleLayout>
    );
};


export default Jobs;