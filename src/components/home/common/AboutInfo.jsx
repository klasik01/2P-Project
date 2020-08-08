import React, {useEffect, useState} from 'react';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {PrimaryButton, StyledLink} from '../../common/Button';

const AboutInfo = () => {

    const [offer, setOffer] = useState({title: '', text: '', ref: '/'});
    const [about, setAbout] = useState({title: '', text: [], ref: '/'});

    useEffect(() => {
        setOffer({
            title: 'Chcete nezávaznou kalkulaci?',
            text: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error  sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae',
            ref: '/about'
        });

        setAbout({
            title: 'O nás?',
            text: [
                'Excepteur sint occaecat cupidatat non proident nt occaecat cupidatat non proident nt occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae',
                'Excepteur sint occaecat cupidatat non proident nt occaecat cupidatat non proident nt occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae',
                'Excepteur sint occaecat cupidatat non proident nt occaecat cupidatat non proident nt occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab illo inventore veritatis quasi architebeatae. vitae'
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