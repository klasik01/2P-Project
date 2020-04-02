
export const buildAboutMenu = roles => {
    const result = [];

        result.push(
            {
                label: 'O nás',
                to: '/about'
            }
        );
    return result;
};

export const buildJobMenu = roles => {
    const result = [];

        result.push(
            {
                label: 'Dělník',
                to: '/jobs/1'
            }
        );
        result.push(
            {
                label: 'Mistr',
                to: '/jobs/2'
            }
        );
    return result;
};

export const buildHomeMenu = roles => {
    const result = [];

        result.push(
            {
                label: 'Úvod',
                to: '/home'
            }
        );
    return result;
};

export const buildContactMenu = roles => {
    const result = [];

        result.push(
            {
                label: 'Kontakt',
                to: '/contact'
            }
        );
    return result;
};

export const buildServiceMenu = roles => {
    const result = [];

        result.push(
            {
                label: 'Služby',
                to: '/article'
            }
        );
    return result;
};

export const buildProjectMenu = roles => {
    const result = [];

        result.push(
            {
                label: 'Projekty',
                to: '/projects'
            }
        );
    return result;
};
