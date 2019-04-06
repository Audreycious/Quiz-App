// A function that listens for button clicks in the div#renderThis
    // output = id of button clicked
    function handleBtnClicks() {
        $('#renderThis').on( 'click', '#quizBtn', function(e) {
            if (this.attr('class') === 'submit') {
            STORE.find(id:'info').currentView = 'view1';
        };
    
        else if (e.attr('id') === 'finalScoreBtn') {
    
        };
    
        if (e.attr('id') === 'finalScoreBtn') {
    
        };
    }

// A function that on form submit checks for if the answer is correct
    // then submits the view and any extra IDs to the decideView()

// A function that checks if the answer is right
    // 1st arg = answer selected, 2nd arg = correct answer
    // output = true/false

// A function that decides which view to change to
    // 1st arg = current view, 2nd arg = answer correct?
    // output = new view

// A function that checks the view num and updates the button text
    // Make an object with the possible texts
    // 

// A function that renders the entire area of id: renderThis
function render() {
    $('#renderThis').html(STORE.find(function(obj) {
        
    }
}
// Find the STORE entry with id = info, then return the value of that obj.currentView, then use that value to update the view to that view


const STORE = [
    { id: 'info', currentView: 'view0'},
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' },
    { question: 'blah1', answer1: 'blah1', answer2:'blah2', answer3:'blah3', answer4:'blah4', correct:'blah3' }];

// View 0 for starting Page
<div class="view0" role="LandingPage">
    <div id='welcomePicture'>
         <img src="https://longdonclub.co.uk/wp/wp-content/uploads/2017/12/Quiz@Kvarteret-e1518802228786.png"
           alt="An image welcoming you to the quiz!"></img>
     </div>
 <button id="quizBtn" class='startQ'>Start Quiz</button>
 </div>
        
//  View 1 for Question Page
<div class="view1" role="QuestionPage">
    <div class="questionPanel">
    ${STORE[correct question number].question}
    {/*  The question input from the correct object in the STORE goes here e.g. STORE[correct question number].question */}
    </div>
    <div class="answerPanel">
    ${STORE[correct answer number].answer}
    {/* The form with the answer inputs from the correct object in the STORE goes here e.g. STORE[correct question number].answer */}
    </div>
    <button id="quizBtn" class='submit'>Submit</button>
</div>

// View 3 for Response Page 
<div class="view3 correct" role="ResponsePage">
    <div class="responsePanel">

    </div>
    <div class="correctAnsPanel">
        {/* https://www.google.com/search?q=thumbs+up&rlz=1C1CHBF_enUS842US842&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNue3K4rfhAhUFnKwKHeLsAkUQ_AUIDigB&biw=1707&bih=778&dpr=1.5#imgrc=RQajt-rDHysSWM: */}
            </div>
    <button id="responseBtn">Next</button>
        </div>

// View 4 for Final Score Page 
<div class="view3" role="ResponsePage">
    <div class="responsePanel">

    </div>
    <div class="correctAnsPanel">
        {/* https://www.google.com/search?q=thumbs+up&rlz=1C1CHBF_enUS842US842&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNue3K4rfhAhUFnKwKHeLsAkUQ_AUIDigB&biw=1707&bih=778&dpr=1.5#imgrc=RQajt-rDHysSWM: */}
            </div>
    <button id="finalScoreBtn">Start Again?</button>
        </div>
