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
    displayname.innerHTML = `<span>Welcome</span> <span id="colorName"> ` + username + `</span><span> Movie Quiz</span>`;
    document.getElementById("hidden").style.visibility = "hidden";
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
    'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg alt = "Movie poster called The ShawsHank"',
    'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg alt="Movie poster called The Godfather"',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg alt="Movie poster called Batman, The Dark Night"',
    'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg alt="Movie poster called Seven"'
);

// the questions and answers in array.
let myQuestion = [];
myQuestion.push(

    ` <p class="boxQ">Who was writer screenplay?</p>
            <p class="box incorrectAns" onclick="answer_Right_or_Wrong(this)">Francis Ford Coppola</p>
            <p class="box correctAns" onclick="answer_Right_or_Wrong(this)">Frank Darabont</p>
            <p class="box incorrectAns" onclick="answer_Right_or_Wrong(this)">Jonathan Nolan</p>`,

    `<p class="boxQ">Who was in the actor?</p>
     <p class="box incorrectAns" onclick="answer_Right_or_Wrong(this)" >Morgan Freeman</p>
     <p class="box incorrectAns" onclick="answer_Right_or_Wrong(this)" >Tim Robbins</p>
     <p class="box correctAns"  onclick="answer_Right_or_Wrong(this)">Marlon Brando</p>`,

    `<p class="boxQ">Who was the director in this film?</p>
     <p class="box correctAns" onclick="answer_Right_or_Wrong(this)" >Christopher Nolan</p>
     <p class="box incorrectAns" onclick="answer_Right_or_Wrong(this)" >David Fincher</p>
     <p class="box incorrectAns" onclick="answer_Right_or_Wrong(this)" >Francis Ford Coppola</p>`,

    `<p class="boxQ">When was the release this film?</p>
     <p class="box incorrectAns"  onclick="answer_Right_or_Wrong(this)">2008</p>
     <p class="box correctAns"  onclick="answer_Right_or_Wrong(this)">1995</p>
     <p class="box incorrectAns"  onclick="answer_Right_or_Wrong(this)">1994</p>`,

);

// declare variable for the function
const firstImg = 0;
const lastImg = arrayOfImages.length;
let currentImg = 0;
let poster = document.getElementsByClassName('poster')[0];
let questions = 0;

// declared variable for the button click next the slides
const nextBtn = document.getElementById('btnNext');
let showUp = document.getElementById('GameAgain').style.display = "none";
nextBtn.addEventListener('click', () => {
    currentImg++;
    if (currentImg >= lastImg) {
        currentImg = lastImg; // hit to last number of 4
        nextBtn.disabled = lastImg; // clcik is stop when reach to 4
        showUp = document.getElementById('GameAgain').style.display = "block";
    }
    poster.src = arrayOfImages[currentImg];
    document.getElementById('numberCounter').innerHTML = (currentImg + 1) + '/4';
    questions = document.getElementById('questions').innerHTML = myQuestion[currentImg];
});

// select the answer to make highlight background color for correct or incorrect.
function answer_Right_or_Wrong(Ans) {
    Ans.classList.toggle("active");
}

