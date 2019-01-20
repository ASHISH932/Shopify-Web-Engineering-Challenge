const uri = 'https://api.github.com';

export const searchApi = item => fetch(`/api/wastes?keyword=${item}`)
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));