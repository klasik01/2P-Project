import React, {useEffect, useState} from 'react';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {PrimaryButton, StyledLink} from '../../common/Button';
import {ArticleLayout} from "../../common/Layout";

const AboutInfo = () => {

    const [offer, setOffer] = useState({title: '', text: '', ref: '/'});
    const [about, setAbout] = useState({title: '', text: [], ref: '/'});

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
    }, []);

    return (
        <div>
            <DefaultSectionContainer isBackground>
                <SmallColumn>
                    <HeaderTwo title={offer.title}/>
                    <Paragraph text={offer.text}/>
                    <StyledLink to={offer.ref}>
                        <PrimaryButton inverse className=" my-2">Více informací</PrimaryButton>
                    </StyledLink>
                </SmallColumn>
                <LargeColumn className="">
                    <div className="col">
                        <HeaderTwo title={about.title}/>
                        {about.text.map((item, index) => <Paragraph key={index} text={item}/>)}
                        <StyledLink to={about.ref}>
                            <PrimaryButton inverse className="my-2">Více informací</PrimaryButton>
                        </StyledLink>
                    </div>
                </LargeColumn>
            </DefaultSectionContainer>
        </div>
    );
};

export default AboutInfo;