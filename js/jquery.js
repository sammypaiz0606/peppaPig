var questions = [
    {
        question: 'Who is the main character?',
        answers:['Mommy Pig', 'George Pig', 'Peppa Pig', 'Daddy Pig'],
        correct:'Peppa Pig'
    }, 
    {
        question: 'What is the name of Peppa Pig little brother?',
        answers:['Freddy ', 'George', 'Danny', 'Edmond'],
        correct:'George'
    },
     {
        question: "What color is the Mommy Pig's dress?",
        answers:['Blue', 'Red', 'Pink', 'Orange'],
        correct:'Orange'
    },
    {
        question: "Who is George's best friend?",
        answers:['Wendy Wolf', 'Dodier Donkey', 'Richard Rabbit', 'Edmond Elephant'],
        correct:'Richard Rabbit'
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
                
                questionForm.innerHTML = '<h1>Good job!</h1>' + "<img src='images/lastpeppa.jpg'>";
                
                
                questionForm.className ='animated flipInX';
                
                
                return;
            };
            
            setTimeout(function() {
                createQuestion();
            }, 1000);
            
            return;
        };  
    };
    
    for(var i =0; i < els.length; i++) {
        if(els[i].checked) {
            els[i].parentElement.className = 'questionWrap wrong';  
        };
    };
};

// audio function
function toggleAudio() {
    var audioElem = document.getElementById('player');
    var soundOn = document.getElementById('play');
    var soundOff = document.getElementById('pause');
    
    if(audioElem.paused) {
        audioElem.play();
        $(soundOn).show();
        $(soundOff).hide();
    } else {
        audioElem.pause();
        $(soundOn).hide();
        $(soundOff).show();
    }
}









