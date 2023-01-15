const quizData = [ {
    question:'1.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'2.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'3.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'4.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'5.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'6.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'7.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'8.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'9.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
},{
    question:'10.question',
    a: '1.a',
    b: '2.b',
    c: '3.c',
    d: '4.d',
    correct_answer: '1.a'
}
];

const questionShow = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const testOverBtn = document.getElementById('finish');
const answerAll = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;


showQuiz();

function showQuiz (){
    deselected();
    const currentQuestionData = quizData[currentQuestion];
    next();
    pre();
    questionShow.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
   
}

function selected(){
    let answer = undefined;
    answerAll.forEach((answerAll) =>{ 
        if(answerAll.checked){
            answer = answerAll.id;
        }
    });
    return answer;
}

function deselected(){
    answerAll.forEach((answerAll) =>{
        answerAll.checked = false;
    });
}

// check if the next question is correct
testOverBtn.addEventListener('click', () => {
    const answer = selected();
if(answer){
    if(answer === quizData[currentQuestion].correct_answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < quizData.length){
        showQuiz();
    }else{
        document.querySelector(".btn-start").classList.add("passive");
        quiz.innerHTML = 
        `<h1>You got ${score} out of ${quizData.length} correct!</h1>
        <button class="btn btn-warning" id="reload" onclick="location.reload()">Reload</button>`;
    }
}
});
selected();
deselected();


document.querySelector(".btn-start").addEventListener("click",()=>{
    document.querySelector(".container").classList.add("active"); 
});
document.getElementById("next").addEventListener("click",()=>{
    currentQuestion++;
    showQuiz();
});
document.getElementById("pre").addEventListener("click",()=>{
    currentQuestion--;
    showQuiz();
});

function next(){
if(currentQuestion === quizData.length-1){
    document.querySelector("#next").classList.add("passive");
    document.querySelector("#finish").classList.add("show");
}else{
    document.querySelector("#next").classList.remove("passive");
    document.querySelector("#finish").classList.remove("show");
}
}

function pre(){
    if(currentQuestion === quizData.length-10){
        document.querySelector("#pre").classList.add("passive");
     }else{
         document.querySelector("#pre").classList.remove("passive");
     }
}

function countDown(period,display){
    let timer = period,minutes,seconds;
    setInterval(function(){
        minutes = parseInt(timer/60,10);
        seconds = parseInt(timer%60,10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (--timer < 0){
            timer = period;
    }else if (timer === 0){
        quiz.innerHTML = 
        `<h1>You got ${score} out of ${quizData.length} correct!</h1>
        <button class="btn btn-warning" id="reload" onclick="location.reload()">Reload</button>`;
        document.querySelector(".btn-start").classList.add("passive");
    }
},1000);
}
window.onload = function(){
    let twoMinutes = 60 * 2,
    display = document.getElementById("time");
    countDown(twoMinutes,display);
};

       