// initialization
let correctAnswers = 0;
let incorrectAnswers = 0;

// question 1
const answerCorrect1 = 4;
let answer1 = prompt('Сколько будет 2 + 2?');
checkAnswer(answerCorrect1, answer1);

// question 2
const answerCorrect2 = 4;
let answer2 = prompt('Сколько будет 2 * 2?');
checkAnswer(answerCorrect2, answer2);

// question 3
const answerCorrect3 = 1;
let answer3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
checkAnswer(answerCorrect3, answer3);

// question 4
const answerCorrect4 = 12;
let answer4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
checkAnswer(answerCorrect4, answer4);

// question 5
const answerCorrect5 = 6;
let answer5 = prompt('Сколько будет 2 + 2 * 2');
checkAnswer(answerCorrect5, answer5);

console.log(`Тест завершен! Правильных ответ(ов): ${correctAnswers}.\
  Неправильных ответ(ов): ${incorrectAnswers}.\
  ${((correctAnswers / (correctAnswers + incorrectAnswers)) * 100).toFixed(0)}% правильных ответов.`);

/**
 * Function compare answer for correctness and calculate statistics
 * @param {*} correct Correct answer
 * @param {*} answer User answer
 */
function checkAnswer(correct, answer) {
  if (correct === Number(answer)) {
    alert('Ответ верный');
    correctAnswers++;
  }
  else {
    alert('Ответ не верный');
    incorrectAnswers++;
  }
}