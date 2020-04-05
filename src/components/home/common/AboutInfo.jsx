import React from 'react';
import {DefaultSectionContainer, LargeColumn, SmallColumn} from '../../common/BlockLayout';
import {HeaderTwo, Paragraph} from '../../common/Typography';
import {PrimaryButton, StyledLink} from '../../common/Button';

const AboutInfo = () => {
    return (
        <div>
            <DefaultSectionContainer isBackground>
                <SmallColumn>
                    <HeaderTwo title="Chceš nezávaznou kalkulaci?"/>
                    <Paragraph text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                        officia deserunt mollit anim id est laborum.sed ut perspiciatis unde omnis natus error
                        sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae. ab
                        illo inventore veritatis quasi architebeatae. vitae"/>
                    <StyledLink to="/about">
                        <PrimaryButton inverse className="btn-block my-2">Více informací</PrimaryButton>
                    </StyledLink>
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
                    <StyledLink to="/about">
                        <PrimaryButton inverse className="btn-block my-2">Více informací</PrimaryButton>
                    </StyledLink>
                </LargeColumn>
            </DefaultSectionContainer>
        </div>
    );
};

export default AboutInfo;