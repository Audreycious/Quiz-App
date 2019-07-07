
const STORE = {
    questionNum: 0,
    currentView: 0,
    totalCorrect: 0,
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
        { num: 9, question: 'Who runs the Kwik-E-Mart?', answer: ['Moe', 'Apu', 'Chief Wiggum', 'Mr. Burns'], correct: 'Apu' }]
}

// The starting screen should have a button that users can click to start the quiz.
function handleBtnClicks() {
    $("#render-this").on("click", "target the button", function() {
        function decideView() {
            console.log("currentView was " + STORE.currentView);
            if (STORE.currentView === 'start-quiz') {
                STORE.currentView = 'question-page';
                console.log("currentView is now: " + STORE.currentView);
            }
            else if (STORE.currentView === 'question-page') {
                STORE.currentView = 'results-page';
                console.log("currentView is now: " + STORE.currentView);
            }
            else if (STORE.currentView === 'results-page') {
                if (STORE.questionNum >= 10) {
                    STORE.currentView = 'ending-page';
                    console.log("currentView is now: " + STORE.currentView);
                    return;
                }
                STORE.currentView = 'question-page';    
                console.log("currentView is now: " + STORE.currentView);       
            }
            else if (STORE.currentView === 'ending-page') {
                STORE.questionNum = 0;
                STORE.currentView = 'start-quiz';
                STORE.totalCorrect = 0;
                console.log("currentView is now: " + STORE.currentView);
            }
            return;
        }
        decideView();
        // Do things that change the home page to the first question page (change views) Make a view handler!
        function handleViews(nextView) {
            let questionInfo = STORE.questions[STORE.questionNum];
            if (nextView === "start-quiz") {
                handleQuestions(questionInfo);
            }
            else if (nextView === "question-page") {
                handleQuestions(questionInfo);
            }
            else if (nextView === "results-page") {
                handleAnswers(questionInfo);
            }
        }
        handleViews(STORE.currentView);
    })
}

// Users should be prompted through a series of at least 10 multiple choice questions that they can answer.
function handleQuestions() {
    
}
function handleAnswers() {
    let correctRadio = STORE.questions[questionNum].correct;
    let currentRadio = $('input[name="quizRadio"]:checked').val();
    // Check if the current radio selected is equal to the correct radio in the question information
    function checkAns(currentRadio, correctRadio) {
        return currentRadio === correctRadio;
    }
    let correctChecker = checkAns(currentRadio, correctRadio);

    // Return information to change the view based on if it's correct or wrong, the current question object, and other info
    let bundleInfo = {correct: correctChecker, question: questionInfo, current: currentRadio }
    return bundleInfo;
}

// Users should be asked questions 1 after the other.

// Users should only be prompted with 1 question at a time.

// Users should not be able to skip questions.

// Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").

// Upon submitting an answer, users should:
// receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
// be moved onto the next question (or interact with an element to move on).

// Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.

// Users should be able to start a new quiz.


handleBtnClicks();