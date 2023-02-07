

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8155640071msh82e17e6cc71dfcep12441bjsna2ec5fe1f5c1',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    .then(response => response.json())

    .then(image => {
        const list = image;

        list.map(item => {
            const poster = item.image;
            const movie = `<img src="${poster}">`;
            document.querySelector('.movies').innerHTML += movie;
            console.log(item);

        })

    })
    .catch(err => console.error(err));