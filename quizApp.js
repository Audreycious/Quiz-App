
let STORE = {
    info: { currentView: Number, questionNum: Number, currentCorrectAns: '', isCorrect: false, totalCorrect: 0, totalNumQuestions: Number},
    
    questions: [
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' },
        { question: 'blah1', answer: ['blah1', 'blah2', 'blah3', 'blah4'], correct: 'blah1' }],
    
    }; // End of STORE
  

// A function that listens for button clicks in the div#renderThis
// event delegator
function handleBtnClicks() {
    let currentQuestionNum;
    let questionObj;
    $('#renderThis').on('click', '#quizBtn', function () {
        if (STORE.info.currentView === 1) { // so it doesn't run except on the question page
            currentQuestionNum = STORE.info.questionNum;
            questionObj = STORE.questions[currentQuestionNum];
            iHaveAllTheAnswers(questionObj);
        }
        let btnClass = $(this).attr('class');
        decideView(btnClass);
        renderView();
    });
}

// A function that checks which answer was selected
//      then cascades into checkAns() to update the STORE, increases the questionNum, then end s
// output = none, updated STORE
    function iHaveAllTheAnswers(questionObj) {
        let ansSelected = $('input[name=quizAns]:checked label').text();
        if (ansSelected == "") {
            
        }
        console.log(ansSelected);
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
            if (STORE.info.questionNum === 9) {
            STORE.info.currentView = 3;
            }
            else STORE.info.currentView = 2;
            return;
        }

        else if (btnClass === 'startAgain') {
            STORE.info.currentView = 1;
            STORE.info.questionNum = 0;
            STORE.info.totalCorrect = 0;
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
function generateView(newView) {
    let currentQuestionNum = (STORE.info.questionNum);
    let currentQuestion = STORE.questions[currentQuestionNum].question;
    let answerKey = STORE.questions[currentQuestionNum].answer;
    let correctAns = STORE.questions[currentQuestionNum].correct;
    let isCorrect = STORE.info.isCorrect;
    let totalCorrect = STORE.info.totalCorrect;
    let totalNumQuestions = STORE.info.totalNumQuestions;
    let view = [// View 0 for Landing Page
        `
        <div id="view0" role="LandingPage">
            <div id='welcomePicture'>
                <img src="https://longdonclub.co.uk/wp/wp-content/uploads/2017/12/Quiz@Kvarteret-e1518802228786.png"
                   alt="An image welcoming you to the quiz!">
            </div>
            <button id="quizBtn" class='startQ'>Start Quiz</button>
        </div>
         `,

        //  View 1 for Question Page
        `
        <div id="view1" role="QuestionPage">
            <div id="questionPanel">${currentQuestion}` // The question input from the correct object in the STORE goes here
            + // jshint ignore:line
            `</div> 
            <div id="ansPanel">`  // The answer array from the correct object in the STORE displays in the answer form here 
            + // jshint ignore:line
            `<form id='ansForm' action="" method="get"> 
                    <input type="radio" name="quizAns" id="1stRadioAns" checked='checked' class='cusRadio' /><label for="1stRadioAns">${answerKey[0]}</label>
                    <input type="radio" name="quizAns" id="2ndRadioAns" class='cusRadio' /><label for="2ndRadioAns">${answerKey[1]}</label>
                    <input type="radio" name="quizAns" id="3rdRadioAns" class='cusRadio' /><label for="3rdRadioAns">${answerKey[2]}</label>
                    <input type="radio" name="quizAns" id="4rdRadioAns" class='cusRadio' /><label for="4rdRadioAns">${answerKey[3]}</label>
                </form>
            </div>
            <button id="quizBtn" class='submit'>Submit</button>
        </div>
        `,

        // View 2 for Response Page 
        `
        <div id="view2" role="ResponsePage">
            ${isCorrect ? 
            `
            <div id="responsePanel">Correct!</div>
            <div id="correctAnsPanel">
                <img src='https://www.google.com/search?q=thumbs+up&rlz=1C1CHBF_enUS842US842&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNue3K4rfhAhUFnKwKHeLsAkUQ_AUIDigB&biw=1707&bih=778&dpr=1.5#imgrc=RQajt-rDHysSWM:' alt='a thumbs up because you are right!'>
            </div>
            `
            : // ***
            `
            <div id="responsePanel">Wrong!</div>
            <div id="correctAnsPanel">
                <p>The correct answer is:</p>
                <p id="correctAnsDisplay">${correctAns}</p>
            </div>
            `}
            <div id='scoreDisplay'>
                <p>Your current score is:</p>
                <p id='currentScoreDisplay'>${totalCorrect} / ${currentQuestionNum}</p>
            </div>
            <button id="quizBtn" class='next'>Next</button>
        `,

        // View 3 for Final Score Page 
        `
        <div id="view3" role="FinalScorePage">
            <p>Your FINAL score is:</p>
            <p id='finalScoreDisplay'>${totalCorrect} / ${totalNumQuestions}</p>
        </div>
        <button id="quizBtn" class='startAgain'>Start again?</button>
        `];
    console.log('`generateView` ran');
    return view[newView];
    }

// A function that renders the entire area of #renderThis
function renderView() {
    console.log('`renderView` ran');
    let newView = STORE.info.currentView;
    let viewString = generateView(newView);
    $('#renderThis').html(viewString);
    }

// A function that sets up the number of questions in STORE.info, also sets questionNum and currentView to 0 so it can load the landing page
    function setUpQuiz() {
        STORE.info.totalNumQuestions = STORE.questions.length;
        STORE.info.questionNum = 0;
        STORE.info.currentView = 0;
        return;
    }

setUpQuiz(); // Protects future expansion of the question block
renderView(); // Renders the opening view on load too
handleBtnClicks();