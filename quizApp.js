
let STORE = {
    info: { currentView: Number, questionNum: Number, currentCorrectAns: '', isCorrect: false, totalCorrect: 0, totalNumQuestions: Number},
    
    questions: [
        { num: 0, question: '1. In which town do the Simpsons reside?', answer: ['Springfield', 'Shelbyville', 'Seinfeld', 'Sunville'], correct: 'Springfield' },
        { num: 1, question: '2. What is the name of the Simpsons\' next door neighbor?', answer: ['Barney Gumble', 'Ned Flanders', 'Principal Skinner', 'Edna Crabapple'], correct: 'Ned Flanders' },
        { num: 2, question: '3. Who founded the Simpsons\' town?', answer: ['Jebadiah Springfield', 'Zachariah Springfield', 'Springfield Manhattan', 'Bart Simpson'], correct: 'Jebadiah Springfield' },
        { num: 3, question: 'How old is Bart Simpson?', answer: ['9', '10', '11', '12'], correct: '10' },
        { num: 4, question: 'What is the name of the clown on Channel 6?', answer: ['Gabbo', 'Krusty', 'Bonko', 'Bozo'], correct: 'Krusty' },
        { num: 5, question: 'What is the name of Lisa Simpsons\' jazz mentor?', answer: ['Billy Jazzman', 'Blind Willy Witherspoon', 'Bleeding Gums Murphy', 'Frank Grimes'], correct: 'Bleeding Gums Murphy' },
        { num: 6, question: 'Who is Mr. Burns\' assistant?', answer: ['Mary Schmidts', 'Seymour Skinner', 'Barnard Gumble', 'Waylon Smithers'], correct: 'Waylon Smithers' },
        { num: 7, question: 'What is the name of the bar where Homer drinks?', answer: ['Duff Brewery', 'Moe\'s Tavern', 'Cheers', 'The Drink Hole'], correct: 'Moe\'s Tavern' },
        { num: 8, question: 'What did the Simpsons\' get for their first Christmas?', answer: ['A cat', 'A hamster', 'A ferret', 'A dog'], correct: 'A dog' },
        { num: 9, question: 'Who runs the Kwik-E-Mart?', answer: ['Moe', 'Apu', 'Chief Wiggum', 'Mr. Burns'], correct: 'Apu' }],
    
    }; // End of STORE
  

// A function that listens for button clicks in the div#renderThis
// event delegator
function handleBtnClicks() {
    let currentQuestionNum;
    $('#render-this').on('click', '#quiz-button', function () {
        if (STORE.info.currentView === 1) { // so it doesn't run except on the question page
            currentQuestionNum = STORE.info.questionNum;
            questionObj = STORE.questions[currentQuestionNum];
            iHaveAllTheAnswers(questionObj);
        }
        let btnClass = $(this).attr('class');
        decideView(btnClass);
        renderView(questionObj);
    });
}

// A function that checks which answer was selected
//      then cascades into checkAns() to update the STORE, increases the questionNum, then end s
// output = none, updated STORE
    function iHaveAllTheAnswers(questionObj) {
        let ansSelected = $('input:checked');
        console.log(ansSelected);
        // .checked.children('span').val();
        // console.log(questionObj.correct);
        // console.log(questionObj.answer[0]);
        // console.log(questionObj.answer[1]);        
        // console.log(questionObj.answer[2]);
        // console.log(questionObj.answer[3]);
        // console.log(ansSelected);
        let correctAns = questionObj.correct;
        checkAns(ansSelected, correctAns);
        STORE.info.questionNum++; 
        return;
    }

// A function that checks if the answer is right, updates the store, and adds to the total correct if it's true, then ends
// 1st arg = answer selected 2nd arg = correct answer

    function checkAns(ansSelected, correctAns) {
        STORE.info.isCorrect = (ansSelected === correctAns);
        if (STORE.info.isCorrect) {
            STORE.info.totalCorrect++;
        }
        return;
    }

// A function that decides which view to change to
// 1st arg = current view, 2nd arg = answer correct?
// output = new view
    function decideView(btnClass) {
        if (btnClass === 'startQ') {
            STORE.info.currentView = 1;
            return;
        }

        else if (btnClass === 'submit') {
            STORE.info.currentView = 2;
            return;
        }

        else if (btnClass === 'next') {
            if (STORE.info.questionNum === 10) {
            STORE.info.currentView = 3;
            }
            else STORE.info.currentView = 1;
            return;
        }

        else if (btnClass === 'startAgain') {
            setUpQuiz();
            return;
        }
        throw console.error('THE VIEW IS MESSED UP');
    }

// A function that adds to the questionNum
// output = new questionNum
// function handleQuestionNum() {
//     console.log('`handleQuestionNum` ran');
//     STORE.info.questionNum++;
//     return;
// }

// A function which generates the view
function generateView(newView, questionObj) {
    let masterQuestionVar = {num: 0, question: "", answer: [], correct: "" };
    if (STORE.questionNum !== 0){
        masterQuestionVar = questionObj;
    }
    let isCorrect = STORE.info.isCorrect;
    let totalCorrect = STORE.info.totalCorrect;
    let totalNumQuestions = STORE.info.totalNumQuestions;
    if (newView === 1) {
        console.log(questionObj.answer);
        console.log(questionObj.correct);
        console.log(isCorrect);
        console.log(questionObj.question);
        console.log(questionObj.num);
    }
    let view = [// View 0 for Landing Page
        `<div id="start-quiz" class="col" role="LandingPage">
            <img src="https://longdonclub.co.uk/wp/wp-content/uploads/2017/12/Quiz@Kvarteret-e1518802228786.png" alt="An image welcoming you to the quiz!">
            <button id="quiz-button" class='startQ'>Start Quiz</button>
        </div>`,

        //  View 1 for Question Page
        `<div id="question-page" class="col" role="QuestionPage">
            <h2>${masterQuestionVar.question}</h2> 
            <form id='ans-form' class="col" > 
                <div>
                    <label><input type="radio" name="quizRadio" value="0" checked />${masterQuestionVar.answer[0]}</span>
                </div>
                <div>
                    <input type="radio" name="quizRadio" id="secondRadioAns" /><span>${masterQuestionVar.answer[1]}</span>
                </div>
                <div>
                    <input type="radio" name="quizRadio" />${masterQuestionVar.answer[2]}</span>
                </div>
                <div>
                    <input type="radio" name="quizRadio" id="fourthRadioAns" /><span>${masterQuestionVar.answer[3]}</span>
                </div>
            </form>
            <button id="quiz-button" class='submit'>Submit</button>
        </div>`,

        // View 2 for Response Page 
        `<div id="view2" class="col" role="ResponsePage">
            ${isCorrect ? `
            <h2 id="responsePanel" class="correct">Correct!</h2>
            <div id="correctAnsPanel">
                <img src='https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Sign_Emoji_Icon_ios10_large.png?v=1542435999' alt='a thumbs up because you are right!'>
            </div>`
            : // Ternary break here
            `<h2 id="responsePanel" class="wrong">Wrong!</h2>
            <div id="correctAnsPanel">
                <p>The correct answer is:</p>
                <p id="correctAnsDisplay">${masterQuestionVar.correct}</p>
            </div>`}
            <div id='scoreDisplay' class="col">
                <p>Your current score is:</p>
                <p id='currentScoreDisplay' class="col">${totalCorrect} / ${masterQuestionVar.num}</p>
            </div>
            <button id="quiz-button" type="button" >Next</button>
        </div>`,

        // View 3 for Final Score Page 
        `<div id="view3" class="col" role="FinalScorePage">
            <p>Your FINAL score is:</p>
            <p id='finalScoreDisplay' class="col">${totalCorrect} / ${totalNumQuestions}</p>
        </div>
        <button id="quiz-button" type="button" >Start again?</button>
        `];
    console.log('`generateView` ran');
    return view[newView];
    }

// A function that renders the entire area of #renderThis
function renderView() {
    console.log('`renderView` ran');
    let newView = STORE.info.currentView;
    let viewString = generateView(newView);
    $('#render-this').html(viewString);
    }

// A function that sets up the number of questions in STORE.info, also sets questionNum and currentView to 0 so it can load the landing page
    function setUpQuiz() {
        STORE.info.totalNumQuestions = STORE.questions.length;
        STORE.info.questionNum = 0;
        STORE.info.currentView = 0;
        STORE.info.totalCorrect = 0;
        return;
    }

setUpQuiz(); // Protects future expansion of the question block
renderView(); // Renders the opening view on load too
handleBtnClicks();