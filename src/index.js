
const STORE = {
    questionNum: 0,
    lastSelection: 'starting-entry',
    lastCorrect: 'starting-entry',
    lastQuestion: {foo: "bar"},
    wasLastCorrect: false,
    currentView: 'start-quiz',
    currentViewString: 'starting-entry',
    totalCorrect: 0,
    questions: [
        { num: 0, question: '1. In which town do the Simpsons reside?', answer: ['Springfield', 'Shelbyville', 'Seinfeld', 'Sunville'], correct: 0 },
        { num: 1, question: '2. What is the name of the Simpsons\' next door neighbor?', answer: ['Barney Gumble', 'Ned Flanders', 'Principal Skinner', 'Edna Crabapple'], correct: 1 },
        { num: 2, question: '3. Who founded the Simpsons\' town?', answer: ['Jebadiah Springfield', 'Zachariah Springfield', 'Springfield Manhattan', 'Bart Simpson'], correct: 0 },
        { num: 3, question: 'How old is Bart Simpson?', answer: ['9', '10', '11', '12'], correct: 1 },
        { num: 4, question: 'What is the name of the clown on Channel 6?', answer: ['Gabbo', 'Krusty', 'Bonko', 'Bozo'], correct: 1 },
        { num: 5, question: 'What is the name of Lisa Simpsons\' jazz mentor?', answer: ['Billy Jazzman', 'Blind Willy Witherspoon', 'Bleeding Gums Murphy', 'Frank Grimes'], correct: 2 },
        { num: 6, question: 'Who is Mr. Burns\' assistant?', answer: ['Mary Schmidts', 'Seymour Skinner', 'Barnard Gumble', 'Waylon Smithers'], correct: 3 },
        { num: 7, question: 'What is the name of the bar where Homer drinks?', answer: ['Duff Brewery', 'Moe\'s Tavern', 'Cheers', 'The Drink Hole'], correct: 1 },
        { num: 8, question: 'What did the Simpsons\' get for their first Christmas?', answer: ['A cat', 'A hamster', 'A ferret', 'A dog'], correct: 3 },
        { num: 9, question: 'Who runs the Kwik-E-Mart?', answer: ['Moe', 'Apu', 'Chief Wiggum', 'Mr. Burns'], correct: 1 }]
};

function handleBtnClicks() {
    $("#render-this").on("click", '#quiz-button', function() {
        // The starting screen should have a button that users can click to start the quiz.
        decideView();

        // Users should be asked questions 1 after the other.
        // Users should only be prompted with 1 question at a time.
        // Users should not be able to skip questions.
        // Do things that change the home page to the first question page (change views) Make a view handler!
        handleViews();

        // Render the new view
        renderView();
    })
}

function decideView() {
    console.log("currentView was " + STORE.currentView);
    if (STORE.currentView === 'start-quiz') {
        STORE.currentView = 'question-page';
    }
    else if (STORE.currentView === 'question-page') {
        STORE.currentView = 'results-page';
    }
    else if (STORE.currentView === 'results-page') {
        if (STORE.questionNum >= 10) {
            STORE.currentView = 'ending-page';
            console.log("currentView is now: " + STORE.currentView);
            return;
        }
        STORE.currentView = 'question-page';         
    }
    else if (STORE.currentView === 'ending-page') {
        STORE.questionNum = 0;
        STORE.currentView = 'start-quiz';
        STORE.totalCorrect = 0;
    }
    console.log("currentView is now: " + STORE.currentView);
    return;
}

function handleViews() {
    let nextView = STORE.currentView;
    let questionNum = STORE.questionNum;
    let questionObject;
    if (questionNum <= 9) {
        questionObject = STORE.questions[questionNum];
        STORE.lastQuestion = questionObject;
        STORE.lastCorrect = questionObject.answer[questionObject.correct];
    }

    if (nextView === "start-quiz") {
        // Users should be able to start a new quiz.
        STORE.currentViewString = `
            <div id="start-quiz" class="col" role="LandingPage">
                <img src="https://longdonclub.co.uk/wp/wp-content/uploads/2017/12/Quiz@Kvarteret-e1518802228786.png" alt="An image welcoming you to the quiz!" />
                <button type="button" id="quiz-button">Start Quiz</button>
            </div>
        `;
    }
    else if (nextView === "question-page") {
        // Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
        // Users should be prompted through a series of at least 10 multiple choice questions that they can answer.
        STORE.currentViewString = `
            <div id="question-page" class="col" role="QuestionPage">
                <p>Question #${questionObject.num + 1}</p>
                <h2>${questionObject.question}</h2> 
                <form id='ans-form' class="col" > 
                    <div>
                        <label><input type="radio" name="quiz-radio" value="0" checked >${questionObject.answer[0]}</label>
                    </div>
                    <div>
                        <label><input type="radio" name="quiz-radio" value="1" >${questionObject.answer[1]}</label>
                    </div>
                    <div>
                        <label><input type="radio" name="quiz-radio" value="2" >${questionObject.answer[2]}</label>
                    </div>
                    <div>
                        <label><input type="radio" name="quiz-radio" value="3">${questionObject.answer[3]}</label>
                    </div>
                </form>
                <button id="quiz-button" type="button" >Submit</button>
            </div>
        `;
    }

    // Upon submitting an answer, users should:
        // receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
        // be moved onto the next question (or interact with an element to move on).
    else if (nextView === "results-page") {
        // Check if the current radio selected is equal to the correct radio in the question information
        let correctRadio = questionObject.correct;
        let currentRadio = $('input[name="quiz-radio"]:checked').val();
        console.log(currentRadio);
        console.log(questionObject);
        STORE.lastSelection = currentRadio;
        handleAnswers(correctRadio, currentRadio);
        console.log(STORE.wasLastCorrect);
        if (STORE.wasLastCorrect) { 
            STORE.currentViewString = `
                <div id="results-page" class="col" role="ResponsePage">
                    <h2 id="responsePanel" class="correct">Correct!</h2>
                    <div id="correctAnsPanel">
                        <img src='https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Sign_Emoji_Icon_ios10_large.png?v=1542435999' alt='a thumbs up because you are right!'>
                    </div>
                    <div id='scoreDisplay' class="col">
                        <p>Your current score is:</p>
                        <p id='currentScoreDisplay' class="col">${STORE.totalCorrect} / ${questionObject.num + 1}</p>
                    </div>
                    <button id="quiz-button" type="button" >Next</button>
                </div>
            `;
        }
        else {
            STORE.currentViewString = `
                <div id="results-page" class="col" role="ResponsePage">
                    <h2 id="responsePanel" class="wrong">Wrong!</h2>
                    <div id="correctAnsPanel">
                        <p>The correct answer is:</p>
                        <p id="correctAnsDisplay">${questionObject.answer[questionObject.correct]}</p>
                    </div>
                    <div id='scoreDisplay' class="col">
                        <p>Your current score is:</p>
                        <p id='currentScoreDisplay' class="col">${STORE.totalCorrect} / ${questionObject.num + 1}</p>
                    </div>
                    <button id="quiz-button" type="button" >Next</button>
                </div>
            `;
        }
        STORE.questionNum++;
    }
    else if (nextView === "ending-page") {
        // Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
        STORE.currentViewString = `
            <div id="view3" class="col" role="FinalScorePage">
                <div id="correctAnsPanel">
                    <p>Your FINAL score is:</p>
                    <p id='finalScoreDisplay' class="col">${STORE.totalCorrect} / 10</p>
                </div>
                <button id="quiz-button" type="button" >Start again?</button>
            </div>
        `;
    }
    return;
}

// A function that renders the views
function renderView() {
    console.log('`renderView` ran');
    $('#render-this').html(STORE.currentViewString);
}

function handleAnswers(correctRadio, currentRadio) {
    correctRadio = parseInt(correctRadio, 10);
    currentRadio = parseInt(currentRadio, 10);
    if (correctRadio === currentRadio) {
        STORE.wasLastCorrect = true;
        STORE.totalCorrect++;
    }
    else STORE.wasLastCorrect = false;
    return;
}

handleBtnClicks();