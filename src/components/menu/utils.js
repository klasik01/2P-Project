export const getNavbarSize = (scrollY, screenSize) => {
    if ((screenSize === 'sm' || screenSize === 'xs' || screenSize === 'md') || !scrollY) {
        return false;
    }
    return true;
};