// task - 4

let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i++;
}

let j = 0;
do {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  j++;
} while (j < 3);


// task - 5
let sum = 0;
const numFrom = 0;
const numTo = 100;
for (let i = numFrom; i <= numTo; i++) {
  sum += i;
}
alert(`Сумма число от ${numFrom} до ${numTo} равна ${sum}.`);