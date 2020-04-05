import React from 'react';
import styled from 'styled-components';
import {PrettyHeader} from '../../common/Typography';
import {DefaultSectionContainer, FullColumn} from '../../common/BlockLayout';
import {LinkCard} from '../../common/Card';

const Wrapper = styled.div`
`;

const Contracts = () => {

    return (
        <Wrapper className="text-center">
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
        </Wrapper>
    );
};

export default Contracts;