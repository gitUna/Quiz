var resultDisplay = document.getElementById('result');

//Random Number from 1 to 6
function newRdnm(){
  return Math.floor(Math.random() * 6 + 1);
}

//Function constructor for Questions
var Question = function(content, array, correctA){
  this.content = content;
  this.answers = array;
  this.correctA = correctA;
}

//Questions
var q1 = new Question('Które z miast leży najbliżej Wiednia?', ['Rzym', 'Bukareszt', 'Budapeszt'], 'Budapeszt');
var q2 = new Question('Które z miast leży najbliżej Tbilisi?', ['Krasnodar', 'Ankara', 'Rzym'], 'Krasnodar');
var q3 = new Question('Które z miast leży najbliżej Wilna?', ['Kowno', 'Lublin', 'Białystok'], 'Kowno');
var q4 = new Question('Które z miast leży najbliżej Kijowa?', ['Warszawa', 'Samara', 'Perm'], 'Warszawa');
var q5 = new Question('Które z miast leży najbliżej Sewilli?', ['Lizbona', 'Malaga', 'Madryt'], 'Malaga');
var q6 = new Question('Które z miast leży najbliżej Genewy?', ['Nantes', 'Paryż', 'Lyon'], 'Lyon');

function init(){
  resultDisplay.textContent = 'Weryfikator';
  resultDisplay.style.background = 'rgba(255,255,255,0.2)';
  resultDisplay.style.color = '#000';
  document.getElementById('buttonSet').style = "pointer-events: auto";
  document.querySelector('#button1').style.background = '';
  document.querySelector('#button2').style.background = '';
  document.querySelector('#button3').style.background = '';

//Question name value
  var q_no = eval('q' + rdnm);
  displayQuestion();

  function displayQuestion(){

  //Display question content
  document.querySelector('.question').textContent = q_no.content;

  //Buttons value
  for(x = 1; x < 4; x++){
  document.getElementById('button' + x).textContent = q_no.answers[x - 1];
  }
  }
}

function checkAnswer(a){
  var q_no = eval('q' + rdnm);
  if(a.textContent == q_no.correctA){
    resultDisplay.textContent = 'Poprawna odpowiedź';
    resultDisplay.style.background = 'rgba(38,192,95,0.4)';

  }else {
    resultDisplay.textContent = 'Błędna odpowiedź';
    resultDisplay.style.background = 'rgba(192,38,49,0.4)';
  }
    a.style.background = 'rgba(255, 255, 255, 0.2)';
    document.getElementById('buttonSet').style = "pointer-events: none";
    resultDisplay.style.display = 'block';
    resultDisplay.style.color = '#D1D1D1';
    document.getElementById('nextQuestion').style.display = 'block';
}

function start(){
  rdnm = newRdnm();
  init();
}
start();
