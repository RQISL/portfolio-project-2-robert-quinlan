// Rapid Api key
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8155640071msh82e17e6cc71dfcep12441bjsna2ec5fe1f5c1',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

// from Api collect poster of images in the array
let arrayOfImages = [];
arrayOfImages.push(
    'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg',
);

let myQuestion = [];
myQuestion.push(

    `<span>Who is the actor in this moive?</span><br>
   <span>Bruce Wills</span><br>
   <span>Jim Carey</span><br>
   <span>Kevin Coster</span>`,

    `<span>Who is the director in this moive?</span><br>
   <span>Mel Gibson</span><br>
   <span>James Carden</span><br>
   <span>Kevin Coster</span>`,

    `<span>When was make this film?</span><br>
   <span>1988</span><br>
   <span>1997</span><br>
   <span>2003</span>`,

    `<span>When was make this film?</span><br>
   <span>1988</span><br>
   <span>1997</span><br>
   <span>2003</span>`,
);

const firstImg = 0;
const lastImg = arrayOfImages.length - 1;
let currentImg = 0;
let poster = document.getElementsByClassName('poster')[0]
let questions = 0;

// declared variable for the button click to next slide
const nextBtn = document.getElementById('btnNext');
nextBtn.addEventListener('click', () => {
    currentImg++;
    if (currentImg >= lastImg) {
        currentImg = lastImg;
        currentImg = 3;
    }
    poster.src = arrayOfImages[currentImg];
    document.getElementById('numberCounter').innerHTML = (currentImg + 1) + '/4';
    questions = document.getElementById('questions').innerHTML = myQuestion[currentImg];
});

// declared variable for the button click to previous slide
const prevBtn = document.getElementById('btnPrev');
prevBtn.addEventListener('click', () => {
    currentImg--;
    if (currentImg <= firstImg) {
        currentImg = firstImg;
        currentImg = 0;
    }
    poster.src = arrayOfImages[currentImg];
    document.getElementById('numberCounter').innerHTML = (currentImg + 1) + '/4';
    questions = document.getElementById('questions').innerHTML = myQuestion[currentImg];

});
console.log(questions, 'Text');


console.log(myQuestion)
