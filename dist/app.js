/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
var input_name = prompt("Введите свое имя и фамилию", " ");
alert("Привет" + " " + input_name + "!");
var number1 = prompt("Введите первое число");
var number2 = prompt("Введите второе число");

if (number1 < number2) {
  console.log("Второе число больше, чем первое");
} else if (number1 > number2) {
  console.log("Первое число больше, чем второе");
} else {
  number1 = number2;
  console.log("Оба числа равны");
}

var color = "red";

switch (color) {
  case "red":
    console.log("Pedestrian should stop");
    break;

  case "yellow":
    console.log("Pedestrian should wait");
    break;

  case "green":
    console.log("Pedestrian should go");

  default:
    console.log("Pedestrian cross against the traffic lights");
}

var str = "*";

while (str.length <= 7) {
  console.log(str + "\n");
  str += "*";
}

console.log("---------------------");

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("---------------------");
var size = 8;
var hash = "#";
var string = '';

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        string += hash;
      } else {
        string += " ";
      }
    } else {
      if (j % 2 === 1) {
        string += hash;
      } else {
        string += " ";
      }
    }
  }

  string += "\n";
}

console.log(string); // 1) function declaration

function min(num1, num2) {
  if (num1 > num2) return num2;else return num1;
}

console.log(min(2, -5)); // function expression

var min2 = function min2(num1, num2) {
  if (num1 < num2) return num1;else return num2;
};

console.log(min(5, 10)); // 2) countChar

function countChar(str, _char) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == _char) {
      count += 1;
    }
  }

  return count;
}

console.log(countChar("Assassin", "s")); // 3) map, filter, reduce

function Task(name, duration, priority) {
  this.name = name, this.duration = duration, this.priority = priority;
}

var task = new Task("", "", "");
var tasks = [new Task("Изучить javascript", 30, 4), new Task("Сделать домашнее задание на курсах", 2, 3), new Task("Похвалить себя", 1, 6), new Task("Похвалить преподавателя))", 1, 7), new Task("Принять душ", 0.2, 2), new Task("Помочь другу переустановить винду", 1, 1), new Task("Понять что функции в javascript  это очень просто", 5, 4)];
var duration = tasks.filter(function (tasks) {
  return tasks.duration > 1;
});
console.log(duration);
var priority = tasks.map(function (tasks) {
  return tasks.priority + 1;
});
console.log(priority);
var task_duration = [30, 2, 1, 1, 0.2, 1, 5];
var longest_duration = task_duration.reduce(function (prev, curr) {
  return Math.max(prev, curr);
});
console.log(longest_duration);
/******/ })()
;
//# sourceMappingURL=app.js.map