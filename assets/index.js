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

    `<p class="boxQ">Who is the actor in this moive?</p>
     <p class="box incorrectAns" >Bruce Wills</p>
     <p class="box correctAns" >Jim Carey</p>
     <p class="box incorrectAns" >Kevin Coster</p>`,

    `<p class="boxQ">Who is the director in this moive?</p>
     <p class="box incorrectAns" >Mel Gibson</p>
     <p class="box incorrectAns" >James Carden</p>
     <p class="box correctAns" >Kevin Coster</p>`,

    `<p class="boxQ">When was make this film?</p>
     <p class="box corectAns" >1988</p>
     <p class="box incorrectAns" >1997</p>
     <p class="box incorrectAns" >2003</p>`,

    `<p class="boxQ">When was make this film?</p>
     <p class="box incorrectAns" >1988</p>
     <p class="box incorrectAns" >1997</p>
     <p class="box correctAns" >2003</p>`,
);

// declare variable for the function
const firstImg = 0;
const lastImg = arrayOfImages.length - 1;
let currentImg = 0;
let poster = document.getElementsByClassName('poster')[0];
let questions = 0;
let clickAns = document.getElementById('getAnswer').style.visibility = "hidden";

// declared variable for the button click next the slides
const nextBtn = document.getElementById('btnNext');
nextBtn.addEventListener('click', () => {
    currentImg++;
    if (currentImg >= lastImg) {
        currentImg = lastImg;
        clickAns = document.getElementById('getAnswer').style.visibility = "visible";
    }
    poster.src = arrayOfImages[currentImg];
    document.getElementById('numberCounter').innerHTML = (currentImg + 1) + '/4';
    questions = document.getElementById('questions').innerHTML = myQuestion[currentImg];



    // select the answer to make highlight red.
    function selectAnswer(event) {
        event.preventDefault();
        let colorBox = document.getElementsByClassName('box');
        let rightAns = document.getElementsByClassName('correctAns');
        let wrongAns = document.getElementsByClassName('incorrectAns');

        if (this.style.backgroundColor === "blue") {
            this.style.backgroundColor = "red";
            console.log('red');
        }
        else if (this.style.backgroundColor === "red") {
            this.style.backgroundColor = "blue";
            console.log('blue');
        }

    }
    let box1 = document.getElementsByClassName('box');
    for (let i = 0; i < box1.length; i++) {
        box1[i].addEventListener('click', selectAnswer);
    }

});



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
}

let getAnswers = document.getElementById('results').style.visibility = "hidden";
let clickAnsBtn = document.getElementById('getAnswer');

function resultanswer() {
    getAnswers = document.getElementById('results').style.visibility = "visible";

    //     let Ans = myQuestion;
    //     let selectAns = document.getElementsByClassName('box');
    //     let rightAns = document.getElementsByClassName('correctAns');
    //     let wrongAns = document.getElementsByClassName('incorrectAns');

    //         if (selectAns === rightAns) {
    //             Ans = document.getElementsByClassName('answers').innerHTML = 'green';
    //             console.log('green');
    //         }
    //         else if (selectAns === wrongAns) {
    //             Ans = document.getElementsByClassName('answers').innerHTML = "Red";
    //             console.log('Red');
    //         }

    //     document.getElementById('answers').innerHTML = Ans;

    // }

    // let ans = document.getElementsByClassName('box');
    // for (let i = 0; i < ans.length; i++) {
    //     ans[i].addEventListener('click', selectAnswer);
    //     console.log(ans[i], "click one");
}


clickAnsBtn.addEventListener('click', resultanswer);



// console.log(ans, "pick one ans");
