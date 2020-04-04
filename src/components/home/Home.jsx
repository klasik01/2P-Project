import React from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';
import {DefaultSectionContainer, FullColumn, LargeColumn, SmallColumn} from '../common/BlockLayout';
import {PrimaryButton} from '../common/Button';
import {HeaderTwo, Paragraph, PrettyHeader} from '../common/Typography';
import {LinkCard} from "../common/Card";

const HomeWrapper = styled.div`
`;

const Home = () => {
    return (
        <HomeWrapper className="">
            <Banner id="home"/>
            {/*Kdo jsme a služby*/}
            <DefaultSectionContainer>
                <SmallColumn>
                    <HeaderTwo title="Kdo jsme?"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                        officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error
                        sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab
                        illo inventore veritatis quasi architebeatae. vitae"/>
                    <PrimaryButton href="#">Více informací</PrimaryButton>
                </SmallColumn>
                <LargeColumn className="">
                    {[1, 2, 3, 4].map(item =>
                        <LinkCard
                            key={item}
                            title="Dělník pozice"
                            paragraph="Lorem ipsum dolor amet contur adip isicing elit sed eiusm"
                            icon="hammer"
                            to="/"/>
                    )}
                </LargeColumn>
            </DefaultSectionContainer>
            <DefaultSectionContainer isBackground isPolygon>
                <FullColumn>
                    <PrettyHeader>Aktuální zakázky</PrettyHeader>
                </FullColumn>
                <FullColumn>
                    {[1, 2, 3, 4].map(item =>
                        <LinkCard
                            key={item}
                            title={`Zakázka číslo ${item}`}
                            paragraph="Lorem ipsum dolor amet contur adip isicing elit sed eiusm"
                            icon="pen"
                            to="/"/>
                    )}
                </FullColumn>
            </DefaultSectionContainer>
            <DefaultSectionContainer>
                <LargeColumn>
                    {[1, 2].map(item =>
                        <LinkCard
                            key={item}
                            title="Dělník pozice"
                            paragraph="Lorem ipsum dolor amet contur adip isicing elit sed eiusm"
                            icon="hammer"
                            to="/"/>
                    )}
                </LargeColumn>
                <SmallColumn>
                    <HeaderTwo title="Hledáš práci?"/>
                    <Paragraph text="Máme trvalý zájem o spolupráci s novými zaměstnanci, kteří jsou
                        odborníky ve svém oboru, chtějí se trvale rozvíjet a patřit společně s námi ke špičce
                        stavební profese."/>
                    <PrimaryButton href="#">Seznam volných pozic</PrimaryButton>
                </SmallColumn>
            </DefaultSectionContainer>

            <DefaultSectionContainer isBackground>
                <SmallColumn>
                    <HeaderTwo title="Chceš nezávaznou kalkulaci?"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                        officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error
                        sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab
                        illo inventore veritatis quasi architebeatae. vitae"/>
                    <PrimaryButton inverse>Více informací</PrimaryButton>
                </SmallColumn>
                <LargeColumn>
                    <HeaderTwo title="O nás?"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident nt occaecat
                        cupidatat non proident nt occaecat cupidatat non proident sunt in culpa qui officia
                        deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit
                        voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab
                        illo inventore veritatis quasi architebeatae. vitae"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa
                        qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus
                        error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa
                        quae. ab illo inventore veritatis quasi architebeatae. vitae"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa
                        qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus
                        error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa
                        quae. ab illo inventore veritatis quasi architebeatae. vitae"/>
                    <PrimaryButton href="#" inverse>Více informací</PrimaryButton>
                </LargeColumn>
            </DefaultSectionContainer>
        </HomeWrapper>
    );
};


export default Home;