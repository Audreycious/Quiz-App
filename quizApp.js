
const STORE = {
    info: { currentView: 0, questionNum: -1, currentCorrectAnswer: '', isCorrect: false, totalCorrect: 0, totalNumQuestions: 10 },
    
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
    
    view: [// View 0 for starting Page
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
            <div id="questionPanel">
            ${STORE.questions[questionNum].question}` // The question input from the correct object in the STORE goes here
            + `</div>
            <div id="answerPanel">`  // The answer array from the correct object in the STORE displays in the answer form here
            + `<form action="" method="post"> 
                    <input type="radio" name="quizAns" id="1stRadioAnswer" value="1stRadioAnswer" /><label for="1stRadioAnswer">
                    ${STORE.questions[questionNum].answer[0]}</label>
                    <input type="radio" name="quizAns" id="2ndRadioAnswer" value="2ndRadioAnswer"  /><label for="2ndRadioAnswer">
                    ${STORE.questions[questionNum].answer[1]}</label>
                    <input type="radio" name="quizAns" id="3rdRadioAnswer" value="3rdRadioAnswer" /><label for="3rdRadioAnswer">
                    ${STORE.questions[questionNum].answer[2]}</label>
                    <input type="radio" name="quizAns" id="4rdRadioAnswer" value="4rdRadioAnswer" /><label for="4rdRadioAnswer">
                    ${STORE.questions[questionNum].answer[3]}</label><
                </form>
            </div>
            <button id="quizBtn" class='submit'>Submit</button>
        </div>
        `,

        // View 2 for Response Page 
        `
        <div id="view2" role="ResponsePage">
            ${STORE.info.isCorrect ? `
            <div id="responsePanel">Correct!</div>
            <div id="correctAnsPanel">
                <img src='https://www.google.com/search?q=thumbs+up&rlz=1C1CHBF_enUS842US842&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNue3K4rfhAhUFnKwKHeLsAkUQ_AUIDigB&biw=1707&bih=778&dpr=1.5#imgrc=RQajt-rDHysSWM:' alt='a thumbs up because you are right!'>`
                : // ***
                `
            <div id="responsePanel">Wrong!</div>
            <div id="correctAnsPanel">
                <p>The correct answer is:</p>
                <p id="correctAnsDisplay>${STORE.info.currentCorrectAnswer}</p>
            `}
            <div id='scoreDisplay'>
                <p>Your current score is:</p>
                <p id='currentScoreDisplay'>${STORE.info.totalCorrect} / ${STORE.info.questionNum}</p>
            <button id="quizBtn" class='next'>Next</button>
        `,

        // View 3 for Final Score Page 
        `
        <div id="view3" role="FinalScorePage">
            <p>Your FINAL score is:</p>
            <p id='finalScoreDisplay'>${STORE.info.totalCorrect} / ${STORE.info.totalNumQuestions}</p>
        </div>
        <button id="quizBtn" class='startAgain'>Start again?</button>
        `]  
    }; // End of STORE
  

// A function that listens for button clicks in the div#renderThis
// event delegator
function handleBtnClicks() {
    $('#renderThis').on('click', '#quizBtn', function () {
        
        decideView(btnClass, correctAns);
        return true;
    })
};

// A function that checks which answer was selected
//      then cascades into checkAns() to update the STORE then end 
// output = updated STORE
    // function iHaveAllTheAnswers() {
    //     if ($('#quizB
    //     const ansSelected = 
    // };

// A function that checks if the answer is right, updates the store, returns true/false
// 1st arg = answer selected
// output = true/false   
    function checkAns(ansSelected, correctAns) {
        
    };

// A function that decides which view to change to
// 1st arg = current view, 2nd arg = answer correct?
// output = new view
    function decideView(btnClass) {
        if (btnClass === 'startQ') {
            STORE.info.currentView = 'view1';
        }

        else if (btnClass === 'submit') {
            STORE.info.currentView = 'view2';
        }

        else if (btnClass === 'next') {
            STORE.info.currentView = 'view3';
        }

        else if (btnClass === 'startAgain') {
            STORE.info.currentView = 'view1';
        };
    };

// A function that adds to the questionNum
// output = new questionNum
    function handleQuestionNum() {
        STORE.info.questionNum++;
        return STORE.info.questionNum;
    };

// A function that renders the entire area of #renderThis
// function render(currentView) {
//     const currentView = STORE.
// };
//     $('#renderThis').html(
// }
// Find the STORE entry with id = info, then return the value of that obj.currentView, then use that value to update the view to that view