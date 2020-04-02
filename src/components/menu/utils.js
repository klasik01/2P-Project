export const getNavbarSize = (scrollY, screenSize) => {
    if ((screenSize === 'sm' || screenSize === 'xs' || screenSize === 'md') || !scrollY) {
        return false;
    }
    return true;
};

export const setNavbarWrapperStyle = (screenType, classOnScroll) => {
    if (screenType === 'sm' || screenType === 'xs' || screenType === 'md') {
        if (classOnScroll) {
            return 'd-block';
        } else {
            return 'd-block';
        }
    }

    if (classOnScroll) {
        return 'd-none d-lg-block';
    }
    return '';
}