
function entergame() {
    let username = document.querySelector('#username').value;
    let displayname = document.querySelector('#displayName');

    displayname.innerHTML = "Welcome " + username + " to Movie Quiz";

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

    // click highlight color
    function selectAnswer(event) {
        event.preventDefault();
        let colorBox = document.getElementsByClassName('box');

        if (this.style.backgroundColor === "blue") {
            this.style.backgroundColor = "red";
            console.log('red');
        }
        else if (this.style.backgroundColor === "red") {
            this.style.backgroundColor = "blue";
            console.log('blue');
        }
    }
    let box = document.getElementsByClassName('box');

    for (let i = 0; i < box.length; i++) {

        box[i].addEventListener('click', selectAnswer);

        //console.log('clicked');
    }
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

    // click highlight color 
    function selectAnswer(event) {
        let colorBox = document.getElementsByClassName('box');

        if (this.style.backgroundColor === "blue") {
            this.style.backgroundColor = "red";
            console.log('red');
        }
        else if (this.style.backgroundColor === "red") {
            this.style.backgroundColor = "blue";
            console.log('blue');
        }
    }
    let box = document.getElementsByClassName('box');

    for (let i = 0; i < box.length; i++) {

        box[i].addEventListener('click', selectAnswer);

        //console.log('clicked');
    }
});
// click highlight color 
function selectAnswer(event) {
    event.preventDefault();
    let colorBox = document.getElementsByClassName('box');

    if (this.style.backgroundColor === "blue") {
        this.style.backgroundColor = "red";
        console.log('red');
    }
    else if (this.style.backgroundColor === "red") {
        this.style.backgroundColor = "blue";
        console.log('blue');
    }
    console.log(colorBox, "it is click working")
}

let box = document.getElementsByClassName('box');

for (let i = 0; i < box.length; i++) {

    box[i].addEventListener('click', selectAnswer);

    //console.log('clicked');
}

//console.log(questions, 'Text');
//console.log(myQuestion)

