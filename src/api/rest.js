export const create = (data) => {
    console.log('run new create');
    return fetch('http://localhost:9000/todos-create', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json();
    });
};

export const readAll = () => {
    return fetch('http://localhost:9000/todos-read-all').then((response) => {
        console.log(response);
        return response.json();
    });
};