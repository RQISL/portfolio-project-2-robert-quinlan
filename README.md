# Movie Quiz

Movie Quiz is an educational website built with HTML, CSS and JavaScript. Users answer five randomly selected movie questions, receive feedback on their answers and save their scores in their browser.

I developed this project to practise JavaScript, including responding to user actions, loading JSON data, updating page content and using local storage.

[View the live project](https://rqisl.github.io/portfolio-project-2-robert-quinlan/)

## Technologies Used

- **HTML:** page structure, navigation and forms.
- **CSS:** styling and responsive layouts.
- **JavaScript:** question loading, answer handling, scoring and page updates.
- **JSON:** storage of the quiz questions and answers.
- **Browser localStorage:** storage of the most recent score and the top five saved scores.
- **GitHub Pages:** website hosting.
- **Adobe Photoshop and Illustrator:** logo and image preparation.

## Concept and Planning

I planned the movie quiz through a mind map, sketches and wireframes for desktop and mobile layouts.

### Brainstorm

I created a mind map to plan the quiz functions.

![Mind map of the quiz functions](assets/Image-for-ReadMe/MindMap.png)

### Initial Sketches

I sketched the desktop and mobile layouts before creating wireframes.

![Desktop and mobile layout sketches](assets/Image-for-ReadMe/SketchDesktopandMobile.png)

### Wireframes

#### Desktop

![Desktop wireframe](assets/Image-for-ReadMe/WireframeDesktop.png)

#### Mobile

![Mobile wireframe](assets/Image-for-ReadMe/WireframeMobile.png)

### Colour Palette

I researched [colour palettes inspired by films](https://www.letseatcake.com/color-palettes-from-films/) and selected colours for the website.

![Colour palette inspiration](assets/Image-for-ReadMe/ColourPallet.png)

![Selected colours](assets/Image-for-ReadMe/ChooseColor.png)

## Design and Features

The quiz is intended for people who enjoy movies and want to test their knowledge of directors, actors, screenwriters, editors and other film topics.

### Logo

![Movie Quiz logo](assets/Image-for-ReadMe/MovieQuizLogo.png)

### Desktop and Mobile Layouts

![Movie Quiz displayed on different devices](assets/Image-for-ReadMe/Project_2_mockup_responsive_screen.png)

### Navigation

The header links to Home, Movie Quiz and Contact.

![Desktop navigation menu](assets/Image-for-ReadMe/MenuDesktop.png)

### Home Page

The home page displays a movie-poster composition and buttons to start the quiz or view high scores.

![Home page with Play and High Scores buttons](assets/Image-for-ReadMe/front_page_button.png)

### Quiz Questions and Answer Feedback

- The quiz loads its questions from a JSON file.
- Each session selects five questions at random and randomises the position of the correct answer.
- Selecting an answer highlights it in green for a correct answer or red for an incorrect answer.
- A correct answer adds ten points to the score.
- After a short delay, the quiz advances to the next question.
- At the end, the user can enter a name, save the score, play again or return home.

![Correct answer highlighted](assets/Image-for-ReadMe/correct_answer.png)

![Incorrect answer highlighted](assets/Image-for-ReadMe/incorrect_answer.png)

![End-of-game page with username entry](assets/Image-for-ReadMe/game_over_fill_name.png)

### High Scores

After completing the quiz, users can enter a name and save their score. The high-score page displays the top five saved scores.

Scores are stored using the browser's localStorage. They are available in the same browser and are not shared between users or devices. Clearing the browser's site data removes the saved scores.

![High-score list](assets/Image-for-ReadMe/high_socore_page.png)

### Contact Page

The project includes a contact-page layout for visitors to enter comments. The screenshot shows the page design; it does not establish whether messages are delivered.

![Contact-page layout](assets/Image-for-ReadMe/ContactPage.png)

### Footer

The footer credits me as the website designer.

![Website footer](assets/Image-for-ReadMe/Footer.png)

## Testing and Validation

The following records describe testing carried out during the original project. They are not a new assessment of the current live website.

### Browser and Responsive Checks

I checked the website in Chrome, Opera, Microsoft Edge and Firefox and reviewed the layouts at different screen sizes. I noted small differences in appearance between screen sizes and browsers.

### Lighthouse

I used Lighthouse to review the pages and recorded the results below. During development, I also added image alternative text and page metadata. The screenshots record the original results; they do not demonstrate that a particular change caused a performance improvement.

#### Home Page

![Original Home page Lighthouse results](assets/Image-for-ReadMe/HomePageResult.png)

#### Movie Quiz Page

![Original Movie Quiz page Lighthouse results](assets/Image-for-ReadMe/MovieQuizPageResult.png)

#### Contact Page

![Original Contact page Lighthouse results](assets/Image-for-ReadMe/ContactPageResult.png)

### HTML

I used the [W3C HTML Validator](https://validator.w3.org/) to identify markup errors and corrected the issues recorded during development.

### CSS

I checked the stylesheet using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and recorded no remaining validation errors at that stage.

### JavaScript

I used [JSHint](https://jshint.com/) to identify warnings in the JavaScript and worked through the reported issues. Lint checks review code quality; they do not replace testing the quiz interactions in a browser.

## Deployment

The website was deployed using GitHub Pages:

1. Open the `portfolio-project-2-robert-quinlan` repository on GitHub.
2. Select **Settings**, then **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Select **Save** and wait for deployment to complete.
6. Open the published site using the link shown by GitHub Pages.

Live project: [Movie Quiz](https://rqisl.github.io/portfolio-project-2-robert-quinlan/).

## Learning, Credits and Limitations

JavaScript was challenging for me during this project. I used course materials, tutorials and mentor feedback to improve my understanding of question handling, answer feedback and score storage.

I adapted examples from the resources credited below. My mentor provided feedback that helped me improve the project and my development process.

Some planned features, including age groups and a countdown timer, were not implemented. High scores are stored locally in the browser rather than in a shared database.

## Resources and Tutorials
I consulted the following course materials and tutorials while developing the project.

1) [RapidAPI tutorial: retrieving poster images](https://www.youtube.com/watch?v=ytNyibPQFhw) 
1) [Working with arrays of images in JavaScript](https://makersaid.com/array-of-images-in-javascript/)
1) [CSS display and hiding elements](https://www.w3schools.com/css/tryit.asp?filename=trycss_display) 
1) Structuring a JavaScript quiz
    - [Example quiz 1](https://simplestepscode.com/javascript-quiz-tutorial/)
    - [Example quiz 2](https://www.youtube.com/watch?v=f4fB9Xg2JEY) 
1) [Output result](https://codepen.io/yaphi1/pen/NpZvJp)
1) [Moving between quiz questions](https://www.youtube.com/watch?v=uAAD3mmQGRQ)
1) [JavaScript arrays — Code Institute](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/0a4bf408d10c4149bb686457ac11edf6/9ad9ed6044aa49c0ae12507f3c03aa79/)
1) [Username input — Code Institute](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/0a4bf408d10c4149bb686457ac11edf6/16d62f1111064f5cb6a64582da96a41b/?child=last.)
    - [Example 1](https://youtu.be/Iw6fyph6MNw)
    - [Example 2](https://youtu.be/KB6Yg5hNrqc)
    - [Example 3](https://www.youtube.com/watch?v=aEj0Wu33hJM) 
1) Highlighting selected answers
    - [Example 1](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/?child=last) 
    - [Example 2](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/?child=last)
    - [Example 3](https://stackoverflow.com/questions/39852228/style-backgroundcolor-doesnt-work)
1) Adding and removing active styles 
    - [Example 1](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/5?activate_block_id=block-v1%3ACodeInstitute%2BLMR101%2B2021_T1%2Btype%40html%2Bblock%404b2504c0ab4e40d6b42d4b527776707a)
    - [Example 2](https://softauthor.com/make-selected-clicked-button-active-in-javascript/)
1) [Output HTML in JavaScript](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/) 
1) [CSS overlays — W3Schools](https://www.w3schools.com/howto/howto_css_overlay.asp)
1) Loops and array iteration
    - [Example 1](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick)
    - [Example 2](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach)
    - [Example 3](https://www.freecodecamp.org/news/javascript-foreach-js-array-for-each-example/amp/)

## Image and Design Credits

I adapted a film-reel graphic from [Vecteezy](https://www.vecteezy.com/vector-art/19115573-creative-business-card-and-logo-template-album-film-movie-reel-vector-illustration) to create the logo using Adobe Illustrator and Photoshop.

I downloaded the following movie-poster images from Wallpaperflare and arranged them into an overlapping composition in Photoshop:

- [The Matrix](https://www.wallpaperflare.com/the-matrix-poster-movies-neo-keanu-reeves-morpheus-carrie-anne-moss-wallpaper-mjcss/download/1920x1200)
- [Avengers](https://www.wallpaperflare.com/marvel-avengers-the-avengers-avengers-age-of-ultron-thor-wallpaper-zkw/download/1920x1200)
- [Spider-Man](https://www.wallpaperflare.com/spider-man-movies-spider-man-3-marvel-comics-black-suited-spiderman-wallpaper-pnkas/download/1920x1200)

These links identify the original sources. The images remain subject to their respective owners' rights and source terms.

## What I Learned

This project helped me practise loading questions from JSON, handling click events, updating page content, calculating scores and saving data in localStorage. I also gained experience translating wireframes into a website and investigating coding problems.

View the live project: [Movie Quiz](https://rqisl.github.io/portfolio-project-2-robert-quinlan/).
