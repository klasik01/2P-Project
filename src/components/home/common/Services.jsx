import React from 'react';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {PrimaryButton, StyledLink} from '../../common/Button';
import {showMaxSmall, showMinLarge} from '../../../utils/screenType';
import {LeftIconRightTextCard, TopIconBottomText} from '../../common/Card';
import PropTypes from 'prop-types';

const Wrapper = styled(Container)`
`;

const Services = (props) => {
    const {screenType} = props;

    const data = [
        {
            key: 1,
            title: 'Stavební práce',
            paragraph: 'Veškeré stavební práce',
            icon: 'hammer'
        },{
            key: 2,
            title: 'Rozpočtářské služby',
            paragraph: 'Vytváření, úpravy a poradenství',
            icon: 'calculator'
        },{
            key: 3,
            title: 'Výplně otvorů',
            paragraph: 'Zajištění dodávky a montáže plastových výplní otvorů',
            icon: 'tools'
        },{
            key: 4,
            title: 'Stavební dozor',
            paragraph: 'Zajištění stavebního dozoru staveb',
            icon: 'user-tie'
        },{
            key: 5,
            title: 'Inženýrská činnost',
            paragraph: 'Zajištění poradenství a koordinace subdodávek na stavbách prováděných svépomocí',
            icon: 'ruler-combined'
        },{
            key: 6,
            title: 'Oceňování nemovitostí',
            paragraph: 'Ocenění nemovitostí vyhláškovou nebo tržní metodou',
            icon: 'money-bill'
        },
    ];

    return (
        <Wrapper className="">
            <DefaultSectionContainer>
                <SmallColumn>
                    <HeaderTwo title="Co nabízíme?"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                        officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error
                        sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab
                        illo inventore veritatis quasi architebeatae. vitae"/>
                    <StyledLink to="/services" className="d-flex justify-content-center">
                        <PrimaryButton className="d-flex justify-content-end">Více informací</PrimaryButton>
                    </StyledLink>
                </SmallColumn>
                {!showMaxSmall(screenType) &&
                <LargeColumn className={`${showMaxSmall(screenType) ? 'd-flex justify-content-center flex-wrap' : ''}`}>
                    {data.map(item => showMinLarge(screenType) ?
                        <TopIconBottomText
                            key={item.key}
                            title={item.title}
                            paragraph={item.paragraph}
                            icon={item.icon}/> :
                        <TopIconBottomText
                            key={item.key}
                            title={item.title}
                            paragraph={item.paragraph}
                            icon={item.icon}
                            screenType={screenType}
                        />
                    )}
                </LargeColumn>
                }
            </DefaultSectionContainer>
        </Wrapper>
    );
};

Services.propTypes = {
    screenType: PropTypes.string.isRequired
};

export default Services;