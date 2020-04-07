import React, {useLayoutEffect, useMemo, useState} from 'react';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {GlobalStyle, GlobalFonts} from '../theme/globalStyle';
import AppContent from './AppContent';
import {withRouter} from 'react-router-dom';


const ScrollToTop = withRouter(({children, location: {pathname}}) => {
    useLayoutEffect(() => {
        // eslint-disable-next-line no-undef
        window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
});

const App = () => {

    const [classOnScroll, setStyleOnScroll] = useState(true);

    useScrollPosition(
        // eslint-disable-next-line no-unused-vars
        ({prevPos, currPos}) => {
            const isShow = currPos.y > -80;
            if (isShow !== classOnScroll) setStyleOnScroll(isShow);
        }, [classOnScroll], false, false, 0
    );

    return useMemo(() => {
        return (
            <React.Fragment>
                <GlobalStyle/>
                <GlobalFonts/>
                <ScrollToTop>
                    <AppContent classOnScroll={classOnScroll}/>
                </ScrollToTop>
            </React.Fragment>
        );
    },
    [classOnScroll]
    );
};

export default App;