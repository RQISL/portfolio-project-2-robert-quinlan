// Enter username its disable unless user must fill enter the name.
let username = document.querySelector('#username');
let UserName = document.querySelector('#enterUsername');

username.addEventListener('keyup', () => {
    UserName.disabled = !username.value;
});

//  Output username on the screen after enter username and disappear the screen of enter username. 
function entergame() {
    let displayname = document.querySelector('#displayName');
    let username = document.querySelector('#username').value;
    displayname.innerHTML = `<span>Welcome</span> <span id="colorName"> ` + username + ` </span><span>Movie Quiz</span>`;
    document.getElementById("hidden").style.visibility = "hidden";
    username = document.getElementById('username').style.color = "blue";
}

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

// the questions and answers in array.
let myQuestion = [];
myQuestion.push(

    `<p class="box" style="background-color: brown;">Who is the actor in this moive?</p>
     <p class="box" style="background-color: blue;">Bruce Wills</p>
     <p class="box" style="background-color: blue;">Jim Carey</p>
     <p class="box" style="background-color: blue;">Kevin Coster</p>`,

    `<p class="box" style="background-color: brown;">Who is the director in this moive?</p>
     <p class="box" style="background-color: blue;">Mel Gibson</p>
     <p class="box" style="background-color: blue;">James Carden</p>
     <p class="box" style="background-color: blue;">Kevin Coster</p>`,

    `<p class="box" style="background-color: brown;">When was make this film?</p>
     <p class="box" style="background-color: blue;">1988</p>
     <p class="box" style="background-color: blue;">1997</p>
     <p class="box" style="background-color: blue;">2003</p>`,

    `<p class="box" style="background-color: brown;">When was make this film?</p>
     <p class="box" style="background-color: blue;">1988</p>
     <p class="box" style="background-color: blue;">1997</p>
     <p class="box" style="background-color: blue;">2003</p>`,
);

// declare variable for the function
const firstImg = 0;
const lastImg = arrayOfImages.length - 1;
let currentImg = 0;
let poster = document.getElementsByClassName('poster')[0]
let questions = 0;

// declared variable for the button click next the slides
const nextBtn = document.getElementById('btnNext');
let popAnswers = document.getElementById('results');
nextBtn.addEventListener('click', () => {
    currentImg++;
    if (currentImg >= lastImg) {
        currentImg = lastImg;
        currentImg = 3;
        popAnswers = document.getElementById('results').style.visibility = "visible";
    }
    else if (popAnswers >= lastImg) {

        popAnswers = 4;
    }

    poster.src = arrayOfImages[currentImg];
    document.getElementById('numberCounter').innerHTML = (currentImg + 1) + '/4';
    questions = document.getElementById('questions').innerHTML = myQuestion[currentImg];


    function selectAnswer(event) {
        event.preventDefault();
        let colorBox = document.getElementsByClassName('box');

        if (this.style.backgroundColor === "blue") {
            this.style.backgroundColor = "red";
            console.log('red');
        }
        else if (colorBox.style.backgroundColor === "red") {
            colorBox.style.backgroundColor = "blue";
            console.log('blue');
        }
    }
    let box = document.getElementsByClassName('box');
    let choiceAnswer = myQuestion;

    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', selectAnswer);
        if (myQuestion === [1]) {
            choiceAnswer.innerHTML = document.getElementById('answers');
        }
        else if (myQuestion === [2]) {
            choiceAnswer.innerHTML = document.getElementById('answers');
        }
        else if (myQuestion === [3]) {
            choiceAnswer.innerHTML = document.getElementById('answers');
        }

        console.log(choiceAnswer, 'clicked');
    }

});

function selectAnswer(event) {
    event.preventDefault();
    let colorBox = document.getElementsByClassName('box');

    if (this.style.backgroundColor === "blue") {
        this.style.backgroundColor = "red";
        console.log('red');
    }
    else if (colorBox.style.backgroundColor === "red") {
        colorBox.style.backgroundColor = "blue";
        console.log('blue');
    }
}
let box = document.getElementsByClassName('box');
let choiceAnswer = myQuestion;

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', selectAnswer);
    if (myQuestion === [1]) {
        choiceAnswer.innerHTML = document.getElementById('answers');
    }
    else if (myQuestion === [2]) {
        choiceAnswer.innerHTML = document.getElementById('answers');
    }
    else if (myQuestion === [3]) {
        choiceAnswer.innerHTML = "test";
    }

    console.log(choiceAnswer, 'clicked');
}
