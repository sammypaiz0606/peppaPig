var questions = [
    {
        question: 'What does HTML stand for?',
        answers:['Hyper Text Markup Field', 'Hyper Text Markup Language', 'Hope Text Maker Language', 'Hype Talk Moon Floor'],
        correct:'Hyper Text Markup Language'
    }, 
    {
        question: 'What declares a HTML5 document?',
        answers:['html', 'head', 'title', '!DOCTYPE html'],
        correct:'!DOCTYPE html'
    },
     {
        question: 'How old is Ariana?',
        answers:[2, 1, 14, 4],
        correct:4
    }
    
    
];
// create a variable elem gets document with an id questionForm
var questionForm = document.getElementById('questionForm');
//button onclick
function startGame() {
//every click the elem questionForm upload to blank elem
    questionForm.innerHTML = '';
//call a function inside another function
    createQuestion();
    
};

//create question button onclick
function createQuestion() {
    questionForm.innerHTML = '';
    
    for(var i = 0; i < 1; i++) {
        var formGroup = document.createElement('div');
        var questionEl = document.createElement('h2');
        var questionText = document.createTextNode(questions[i].question);
        
        
        
        formGroup.className = 'formGroup';
        questionEl.id       = 'question' + [i];
        
        questionEl.appendChild(questionText);
        formGroup.appendChild(questionEl);
        
        questionForm.appendChild(formGroup);
    };
};