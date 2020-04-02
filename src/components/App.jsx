import React, { useLayoutEffect, useMemo, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import GlobalStyle from '../theme/globalStyle';
import AppContent from './AppContent';
import { withRouter } from 'react-router-dom';


const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return children || null
});

const App = () => {

    const [classOnScroll, setStyleOnScroll] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > -80
            if (isShow !== classOnScroll) setStyleOnScroll(isShow)
        }, [classOnScroll], false, false, 0
    );

    return useMemo(() => {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ScrollToTop>
                    <AppContent classOnScroll={classOnScroll} />
                </ScrollToTop>
            </React.Fragment>
        )
    },
        [classOnScroll]
    );
}

export default App;