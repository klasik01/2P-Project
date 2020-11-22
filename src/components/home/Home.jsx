import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';
import useScreenType from '../../utils/screenType';
import AboutInfo from './common/AboutInfo';
import Jobs from './common/Jobs';
import Contracts from './common/Contracts';
import Services from './common/Services';
import image from '../../images/house.jpg';
import workerWorkerImg from '../../images/worker-svg.svg';
import workerMisterImg from '../../images/worker-mister.svg';

const HomeWrapper = styled.div`
`;

const Home = () => {

    const [offer, setOffer] = useState({title: '', text: '', ref: '/'});
    const [about, setAbout] = useState({title: '', text: [], ref: '/'});
    const [contracts, setContracts] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [jobsInfo, setJobsInfo] = useState({title: '', paragraph: '', buttonTitle: '', to: ''});
    const [services, setServices] = useState([]);
    const [servicesInfo, setServicesInfo] = useState({title: '', paragraph: '', buttonTitle: '', to: ''});

    useEffect(() => {
        setOffer({
            title: 'Chcete nezávaznou kalkulaci?',
            text: 'Zašlete nám žádost o zpracování cenové nabídky na email: info@2pstavebni.cz nebo použijte poptávkový formulář',
            ref: '/about'
        });

        setAbout({
            title: 'O nás?',
            text: [
                'Rozvíjející se stavební firma, která dává důraz na kvalitu a efektivní řešení ' +
                'staveb. Zabýváme se jak kompletní realizací pozemních staveb, tak i inženýrskou činností, samostatné ' +
                'dodávky výplní otvorů, odborná motáž požárních ucpávek apod. Více se dozvíte záložce služby.',

                'Snažíme se jít s dobou a pracujeme s elektronickým stavebním deníkem, dáváme ' +
                'investorovi možnost kontrolovat vlastní stavbu pomocí webového rozhraní atd.'
            ],
            ref: '/about'
        });

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

        setJobs([
            {
                'id': 1,
                'contract': 'Pozice Dělník',
                'description': 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm',
                'img': workerWorkerImg,
                'icon': '',
                'to': '/jobs/'
            }, {
                'id': 2,
                'contract': 'Pozice Mistr',
                'description': 'Lorem ipsum dolor amet contur adip isicing elit sed eiusm',
                'img': workerMisterImg,
                'icon': 'hammer',
                'to': '/jobs/'
            }
        ]);

        setJobsInfo({
            'title': 'Hledáš práci?',
            'paragraph': 'Máme trvalý zájem o spolupráci s novými zaměstnanci, kteří jsou odborníky ve svém oboru, chtějí se trvale rozvíjet a patřit společně s námi ke špičce stavební profese.',
            'buttonTitle': 'Seznam volných pozic',
            'to': 'jobs'
        });

        setServices([
            {
                key: 1,
                title: 'Stavební práce',
                paragraph: 'Veškeré stavební práce',
                icon: 'hammer'
            }, {
                key: 2,
                title: 'Rozpočtářské služby',
                paragraph: 'Vytváření, úpravy a poradenství',
                icon: 'calculator'
            }, {
                key: 3,
                title: 'Výplně otvorů',
                paragraph: 'Zajištění dodávky a montáže plastových výplní otvorů',
                icon: 'tools'
            }, {
                key: 4,
                title: 'Stavební dozor',
                paragraph: 'Zajištění stavebního dozoru staveb',
                icon: 'user-tie'
            }, {
                key: 5,
                title: 'Inženýrská činnost',
                paragraph: 'Zajištění poradenství a koordinace subdodávek na stavbách prováděných svépomocí',
                icon: 'ruler-combined'
            }, {
                key: 6,
                title: 'Protipožární ucpávky',
                paragraph: 'Odborná montáž vč. protokolů protipožárních ucpávek',
                icon: 'fire-extinguisher'
            },
        ]);

        setServicesInfo({
            'title': 'Co nabízíme?',
            'paragraph': 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui\n' +
                '                        officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error\n' +
                '                        sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab\n' +
                '                        illo inventore veritatis quasi architebeatae. vitae',
            'buttonTitle': 'Více informací',
            'to': 'services'
        });

    }, []);

    const screenType = useScreenType();
    return (
        <HomeWrapper className="">
            <Banner id="home"/>
            <Services screenType={screenType} data={services} info={servicesInfo}/>
            <Contracts data={contracts}/>
            <Jobs screenType={screenType} data={jobs} info={jobsInfo}/>
            <AboutInfo about={about} offer={offer}/>

        </HomeWrapper>
    );
};

export default Home;