export const buildAboutMenu = () => {
    const result = [];

    result.push(
        {
            label: 'O nás',
            to: '/about'
        }
    );
    return result;
};

export const buildJobMenu = () => {
    const result = [];

    result.push(
        {
            label: 'Zaměstnání',
            to: '/jobs'
        }
    );
    return result;
};

export const buildHomeMenu = () => {
    const result = [];

    result.push(
        {
            label: 'Úvod',
            to: '/home'
        }
    );
    return result;
};

export const buildContactMenu = () => {
    const result = [];

    result.push(
        {
            label: 'Kontakt',
            to: '/contact'
        }
    );
    return result;
};

export const buildServiceMenu = () => {
    const result = [];

    result.push(
        {
            label: 'Služby',
            to: '/services'
        }
    );
    return result;
};

export const buildProjectMenu = () => {
    const result = [];

    result.push(
        {
            label: 'Projekty',
            to: '/projects'
        }
    );
    return result;
};
