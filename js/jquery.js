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
        
    for(var j = 0; j < questions[i].answers.length; j++) {
        var answerDiv = document.createElement('div');
        var answerEl = document.createElement('input');
        var answerText = document.createTextNode(questions[i].answers[j]);
        
        answerDiv.appendChild(answerEl);
        answerDiv.appendChild(answerText);
        
        answerDiv.className  = 'questionWrap';
        answerEl.type        = 'radio';
        answerEl.name        = 'radio' + [i];
        answerEl.value       = questions[i].answers[j];
        
        formGroup.appendChild(answerDiv);
        };
    };
    
   var submitBtn = document.createElement('button');
    
    submitBtn.className = 'btn btn-lg btn-primary';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.type = 'button';
    submitBtn.onclick = submitAnswer;
    
    questionForm.appendChild(submitBtn);
    
};

function submitAnswer() {
    var els = document.getElementsByTagName('input');
    
    for(var i =0; i < els.length; i++) {
        
        if(els[i].checked && els[i].value == questions[0].correct) {
            questions.shift();
            els[i].parentElement.className = 'questionWrap right';
            
            if(questions.length == 0) {
                questionForm.innerHTML = '';
                
                questionForm.style.textAlign = 'center';
                questionForm.style.margin = '0 auto';
                
                questionForm.innerHTML = '<h1> Good job!</h1>' + '<br>' + "<img src='images/shark.jpg'>"; 
                
                return;
            };
            setTimeout(function() {
                createQuestion();
            }, 2000);
            
            return;
        };  
    };
    
    for(var i =0; i < els.length; i++) {
        if(els[i].checked) {
            els[i].parentElement.className = 'questionWrap wrong';  
        };
    };
};

    