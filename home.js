var quizData = []
var keys = Object.keys(localStorage)
var i = keys.length;

while ( i--) {
    quizData.push(JSON.parse(localStorage.getItem(keys[i])) );
    console.log(quizData[0][5])
  } 



// const quiz = document.getElementById("quiz");
const quiz=document.querySelector(".question-container")

const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("option_a_text");
const b_text = document.getElementById("option_b_text");
const c_text = document.getElementById("option_c_text");
const d_text = document.getElementById("option_d_text");
const submitButton = document.getElementById("Submit");

let currentQuiz = 0;
let score = 0;



const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};


const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  // console.log(typeof(answer))
  return answer;
 
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  // console.log(currentQuizData[0])
  questionElement.innerText = currentQuizData[0];
  a_text.innerText = currentQuizData[1];
  b_text.innerText = currentQuizData[2];
  c_text.innerText = currentQuizData[3];
  d_text.innerText = currentQuizData[4];
  // console.log(quizData[currentQuiz][5])

};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    // console.log(typeof(quizData[currentQuiz][5]))
    if (answer === quizData[currentQuiz][5]) score++;
    currentQuiz++;
    console.log(currentQuiz)
    console.log(quizData.length)

    if (currentQuiz < quizData.length) loadQuiz();
    else {
      console.log("hi")
      quiz.innerHTML = `
            <h2 style="text-align:center;" "margin-bottom:100px">You answered ${score}/${quizData.length} questions correctly</h2>
            <button style="margin-top:50px" onclick="history.go(0)">Play Again</button>
            <button style="margin-top:50px" onclick="history.go(-1)">Home</button>
        `;
    }
  }
});
