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
    'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg alt="Movie poster called Seven"',
);

// the questions and answers in array.
let myQuestion = [];
myQuestion.push(

    `<p class="boxQ">Who is the actor in this moive?</p>
     <p class="box incorrectAns"  onclick="changeColor(this)">Bruce Wills</p>
     <p class="box correctAns" onclick="changeColor(this)"" >Jim Carey</p>
     <p class="box incorrectAns" onclick="changeColor(this)"" >Kevin Coster</p>`,

    `<p class="boxQ">Who is the director in this moive?</p>
     <p class="box incorrectAns" onclick="changeColor(this)"" >Mel Gibson</p>
     <p class="box incorrectAns" onclick="changeColor(this)"" >James Carden</p>
     <p class="box correctAns"  onclick="changeColor(this)"">Kevin Coster</p>`,

    `<p class="boxQ">When was make this film?</p>
     <p class="box correctAns" onclick="changeColor(this)"" >1988</p>
     <p class="box incorrectAns" onclick="changeColor(this)"" >1997</p>
     <p class="box incorrectAns" onclick="changeColor(this)"" >2003</p>`,

    `<p class="boxQ">When was make this film?</p>
     <p class="box incorrectAns"  onclick="changeColor(this)"">1988</p>
     <p class="box incorrectAns"  onclick="changeColor(this)"">1997</p>
     <p class="box correctAns"  onclick="changeColor(this)"">2003</p>`,
);

// declare variable for the function
const firstImg = 0;
const lastImg = arrayOfImages.length - 1;
let currentImg = 0;
let poster = document.getElementsByClassName('poster')[0];
let questions = 0;

// declared variable for the button click next the slides
const nextBtn = document.getElementById('btnNext');
nextBtn.addEventListener('click', () => {
    currentImg++;
    if (currentImg >= lastImg) {
        currentImg = lastImg;
    }
    poster.src = arrayOfImages[currentImg];
    document.getElementById('numberCounter').innerHTML = (currentImg + 1) + '/4';
    questions = document.getElementById('questions').innerHTML = myQuestion[currentImg];
});

// select the answer to make highlight background color.
let rightAns = document.getElementsByClassName('correctAns');

function changeColor(cell) {
    // adds or removes the active class 
    cell.classList.toggle("active");
}

//let getAnswers = document.getElementById('results').style.visibility = "hidden";
// let clickAnsBtn = document.getElementById('getAnswer');

// function resultanswer() {
//     getAnswers = document.getElementById('results').style.visibility = "visible";
// }
// clickAnsBtn.addEventListener('click', resultanswer);



// console.log(ans, "pick one ans");
