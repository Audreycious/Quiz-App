
const STORE = {info: {currentView: 'view0', questionNum: 0, currentCorrectAnswer: '', isCorrect: false, totalCorrect: 0, totalNumQuestions: 10 },
    questions: [
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'},
        {question: 'blah1', answer: [ 'blah1', 'blah2', 'blah3', 'blah4', 'the correct answer'], correct:'blah1'}]};

// A function that listens for button clicks in the div#renderThis
    // output = class of button clicked
    function handleBtnClicks() {
        $('#renderThis').on( 'click', '#quizBtn', function() {
            // let correctAns = STORE.find( obj => obj.id === "info").currentCorrectAnswer;
            decideView(btnClass, correctAns);
            return true;
    })};

// A function that outputs if the answer is correct or not
    function isCorrect() {
        
    }
// A function that decides which view to change to
    // 1st arg = current view, 2nd arg = answer correct?
    // output = new view
    function decideView(btnClass, correctAns) {
        if (btnClass === 'startQ') {
            STORE.id.currentView = 'view1';}

        else if (btnClass === 'submit') {
            STORE.id.currentView = 'view2';}

        else if (btnClass === 'next') {
            STORE.id.currentView = 'view3';}

        else if (btnClass === 'startAgain') {
            STORE.id.currentView = 'view1';};
        };

// A function that on form submit checks for if the answer is correct
    // then submits the view ato the decideView()
     

// A function that checks if the answer is right
    // 1st arg = answer selected, 2nd arg = correct answer
    // output = true/false   
    function checkAns(ansSelected, correctAns) {

    };  

// A function that checks the view num and updates the button text
    // Make an object with the possible texts
    // 

// A function that renders the entire area of id: renderThis
function render(currentView) {
    const currentView = STORE.find(function(obj) {

    })};
//     $('#renderThis').html(
// }
// Find the STORE entry with id = info, then return the value of that obj.currentView, then use that value to update the view to that view




// View 0 for starting Page
const view0 = (`
<div class="view0" role="LandingPage">
    <div id='welcomePicture'>
         <img src="https://longdonclub.co.uk/wp/wp-content/uploads/2017/12/Quiz@Kvarteret-e1518802228786.png"
           alt="An image welcoming you to the quiz!"></img>
    </div>
    <button id="quizBtn" class='startQ'>Start Quiz</button>
 </div>
 `);
        
//  View 1 for Question Page
const view1 = (`
<div id="view1" role="QuestionPage">
    <div id="questionPanel">
    ${STORE[questionNum].question}` // The question input from the correct object in the STORE goes here
    +`</div>
    <div id="answerPanel">`  // The answer array from the correct object in the STORE displays in the answer form here
        +`<form action="" method="post"> 
            <input type="radio" name="quizAns" id="1stRadioAnswer" value="1stRadioAnswer" /><label for="1stRadioAnswer">${STORE[questionNum].answer[1]}</label>
            <input type="radio" name="quizAns" id="2ndRadioAnswer" value="2ndRadioAnswer"  /><label for="2ndRadioAnswer">${STORE[questionNum].answer[2]}</label>
            <input type="radio" name="quizAns" id="3rdRadioAnswer" value="3rdRadioAnswer" /><label for="3rdRadioAnswer">${STORE[questionNum].answer[3]}</label>
            <input type="radio" name="quizAns" id="4rdRadioAnswer" value="4rdRadioAnswer" /><label for="4rdRadioAnswer">${STORE[questionNum].answer[4]}</label><
        </form>
    </div>
    <button id="quizBtn" class='submit'>Submit</button>
</div>
`);

// View 2 for Response Page 
const view2 = (`
<div id="view2" role="ResponsePage">
    ${STORE.info.isCorrect ? `
    <div id="responsePanel">Correct!</div>
    <div id="correctAnsPanel">
        <img src='https://www.google.com/search?q=thumbs+up&rlz=1C1CHBF_enUS842US842&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNue3K4rfhAhUFnKwKHeLsAkUQ_AUIDigB&biw=1707&bih=778&dpr=1.5#imgrc=RQajt-rDHysSWM:' alt='a thumbs up because you are right!'></img>`
    :  
    `
    <div id="responsePanel">Wrong!</div>
    <div id="correctAnsPanel">
        <p>The correct answer is:</p>
        <p id="correctAnsDisplay>${STORE.id.currentCorrectAnswer}</p>
    `}
    <div id='scoreDisplay'>
        <p>Your current score is:</p>
        <p id='currentScoreDisplay'>${STORE.id.totalCorrect} / ${STORE.id.questionNum}</p>
    <button id="quizBtn" class='next'>Next</button>
`);

// View 3 for Final Score Page 
const view3 = (`
<div id="view3" role="FinalScorePage">
    <p>Your FINAL score is:</p>
    <p id='finalScoreDisplay'>${STORE.id.totalCorrect} / ${STORE.id.totalNumQuestions}</p>
</div>
<button id="quizBtn" class='startAgain'>Start again?</button>
`);
