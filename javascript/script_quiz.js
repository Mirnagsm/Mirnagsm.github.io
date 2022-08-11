/* Funcionalidad de las opciones, los botones y las secciones previamente diseñados*/

/* Todos los elementos requeridos */

const start_btn = document.querySelector(".start_btn button");
const info___box = document.querySelector(".info___box");
const exit_btn = info___box.querySelector(".buttons .quit");
const continue_btn = info___box.querySelector(".buttons .next");
const quiz___box = document.querySelector(".quiz___box");
const timer___box = document.querySelector(".timer_time .timer___min");

const option___list = document.querySelector(".option___list");

// Click en el botón de iniciar quiz//

start_btn.onclick = ()=>{
    info___box.classList.add("activeInfo"); //Se muestra la caja de información
}

// Click en el botón de volver//

exit_btn.onclick = ()=>{
    quiz___box.classList.remove("activeInfo"); //Se esconde la caja de información
} 

// Click en el botón de continuar//

continue_btn.onclick = ()=>{
    info___box.classList.remove("activeInfo"); //Se esconde la caja de información
    quiz___box.classList.add("activeQuiz"); //Mostrar el quiz
    showQuestions(0);
    queCounter(1);
    startTimer(15);
} 

let que_count = 0;
let que_numb  = 1;
let counter;
let timeValue = 15;
let userScore = 0;

const next___btn = quiz___box.querySelector(".next___btn");
const result___box = document.querySelector(".result___box");
const restart___quiz = result___box.querySelector(".buttons .quit");
const recomendaciones___quiz = result___box.querySelector(".buttons .recomendaciones");

restart___quiz.onclick = ()=>{
location.href='http://127.0.0.1:5500/p%C3%A1gina%20principal.html';
}


//click en el botón de siguiente

next___btn.onclick = ()=>{
if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    next___btn.style.display = "none";

}else{
    console.log("Respuestas completas");
    ShowResultBox();
}
    
}
//Citando a las preguntas y respuestas desde el arreglo.

function showQuestions(index){
const que___text = document.querySelector(".que___text");
let que_tag = '<span>'+ questions[index].question +'</span>';
let option_tag = '<div class="option"> '+ questions[index].options[0] +' <span></span><div></div></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span><div></div></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span><div></div></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span><div></div></div>';

que___text.innerHTML = que_tag;
option___list.innerHTML = option_tag;
const option = option___list.querySelectorAll(".option");
for (let i = 0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
}
}

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option___list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Respuesta correcta");
    }else{
        answer.classList.add("incorrect");
        console.log("Respuesta incorrecta");
}
//Una vez que el usuario seleccione una opción, se desabilitarán las demás

for (let i = 0; i < allOptions; i++) {
    option___list.children[i].classList.add("disabled");
}
next___btn.style.display = "block";

}

function ShowResultBox(){
    info___box.classList.remove("activeInfo"); //ocultar la caja de información
    quiz___box.classList.remove("activeQuiz"); //ocultar el quiz con sus respectivos elementos
    result___box.classList.add("activeResult"); //mostrar el resultado junto con los puntajes
    const scoreText = result___box.querySelector(".resultado");
    if(userScore > 15){
    let scoreTag = '<h3>Excelente. Tu puntaje: <p>'+ userScore +'</p> de <p>'+ questions.length +'</p> puntos</h3>';
    scoreText.innerHTML = scoreTag;
}

else if(10 < userScore < 15){
    let scoreTag = '<h3>Bien. Tu puntaje: <p>'+ userScore +'</p> de <p>'+ questions.length +'</p> puntos</h3>';
    scoreText.innerHTML = scoreTag;
}

if(userScore < 10 ){
    let scoreTag = '<h3>Sigue practicando y reforzando tus conocimientos. Tu puntaje: <p>'+ userScore +'</p> de <p>'+ questions.length +'</p> puntos</h3>';
    scoreText.innerHTML = scoreTag;
}
}

function startTimer(timeValue){
    
    counter = setInterval(timer, 1000);
    function timer(){
        timer___box.textContent = timeValue;
timeValue--;

if(timeValue < 9){
let addZero = timer___box.textContent;
timer___box.textContent = "0" + addZero;
}

if(timeValue < 0){
    clearInterval(counter);
    timer___box.textContent = "00";
}
    }
}
function queCounter(index){
    const botton_ques_counter = quiz___box.querySelector(".total___ques");
    let totalQuesCountTag = '<span><p>'+ index +'</p>de<p>'+ questions.length +'</p>Preguntas</span>';
    botton_ques_counter.innerHTML = totalQuesCountTag;
}
