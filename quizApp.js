// A function that listens for button clicks and submits its ID to the decideView()

// A function that on form submit checks for if the answer is correct
    // then submits the view and any extra IDs to the decideView()

// A function that decides which view to change to
    // 1st arg = current view

// A function that checks the view num and updates the button text
    // Make an object with the possible texts

// A function that renders

// View 0 for starting Page

const STORE = [
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'},
    {question: 'blah1', answer: 'blah1'}];

<div class="view0" role="LandingPage">
    <div id='welcomePicture'>
         <img src="https://longdonclub.co.uk/wp/wp-content/uploads/2017/12/Quiz@Kvarteret-e1518802228786.png"
           alt="An image welcoming you to the quiz!"></img>
     </div>
 <button id="quizBtn">Start Quiz</button>
 </div>
        
//  View 1 for Question Page
<div class="view1" role="QuestionPage">
    <div class="questionPanel">
    {/*  The question input from the object goes here e.g. obj.question1 */}
    </div>
    <div class="answerPanel">
    {/* The form with the answer inputs from the object goes here e.g. arr. */}
    </div>
    <button id="quizBtn">Start Quiz</button>
</div>

View 3 for Response Page 
<div class="view3" role="ResponsePage">
    <div class="responsePanel">

    </div>
    <div class="correctAnsPanel">
        {/* https://www.google.com/search?q=thumbs+up&rlz=1C1CHBF_enUS842US842&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNue3K4rfhAhUFnKwKHeLsAkUQ_AUIDigB&biw=1707&bih=778&dpr=1.5#imgrc=RQajt-rDHysSWM: */}
            </div>
    <button id="quizBtn">Start Quiz</button>
        </div>
