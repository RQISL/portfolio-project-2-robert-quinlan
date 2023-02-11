

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8155640071msh82e17e6cc71dfcep12441bjsna2ec5fe1f5c1',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

// fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
//     .then(response => response.json())

//     .then(image => {
//         const list = image;

//         list.map(item => {
//             const poster = item.image;
//             const movie = `<img src="${poster}">`;
//             document.querySelector('.movies').innerHTML += movie;
//             console.log(image);

//         })
//     })
//     .catch(err =>
//         console.error(err));

let arrayOfImages = [];
let i = 0;

arrayOfImages.push([
    'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg'
]);

// function poster() {
//     for (let i = 0; i < arrayOfImages.length; i++) {

//     }
//     // return movie;
// }
const movie = `<img src="${arrayOfImages}">`;
document.querySelector('.movies').innerHTML = movie;
console.log(movie);

function prev() {
    i <= arrayOfImages.length; i--;
    return img();
}
console.log(arrayOfImages);

function next() {
    i >= arrayOfImages.length; i++;
    return img();
}

function img() {
    if (i >= arrayOfImages) {
        movie[i]++;
    }

}
console.log(arrayOfImages[i]);