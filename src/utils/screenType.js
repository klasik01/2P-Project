import {useEffect, useState} from 'react';

const useScreenType = () => {
    const [screenType, setScreenType] = useState(getScreenType());

    const resizeEvent = () => {
        setScreenType(getScreenType());
    };

    useEffect(() => {
        // eslint-disable-next-line no-undef
        window.addEventListener('resize', resizeEvent);
        return () => {
            // eslint-disable-next-line no-undef
            window.removeEventListener('resize', resizeEvent);
        };
    }, []);

    return screenType;
};

const getScreenType = () => {
    let screenType = null;

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        if (window.matchMedia('(max-width: 575px)').matches) {
            screenType = 'xs';
            // eslint-disable-next-line no-undef
        } else if (window.matchMedia('(max-width: 767px)').matches) {
            screenType = 'sm';
            // eslint-disable-next-line no-undef
        } else if (window.matchMedia('(max-width: 991px)').matches) {
            screenType = 'md';
            // eslint-disable-next-line no-undef
        } else if (window.matchMedia('(max-width: 1199px)').matches) {
            screenType = 'lg';
        } else {
            screenType = 'xl';
        }
    }

    return screenType;
};

export const showMinLarge= (screenSize) => {
    return !(screenSize === 'sm' || screenSize === 'xs' || screenSize === 'md');
};
export const showMinMiddle= (screenSize) => {
    return !(screenSize === 'sm' || screenSize === 'xs');
};
export const showMaxSmall= (screenSize) => {
    return (screenSize === 'sm' || screenSize === 'xs');
};


export default useScreenType;