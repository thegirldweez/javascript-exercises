const reverseString = function (parameter) {
  const greeting = parameter;

  let greeting1 = greeting.split("");

  let reversedGreeting = greeting1.reverse();

  return reversedGreeting.join("");
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");

/*
const reverseString = function () {
  const greetings = "hello there";

  let greetingTwo = greetings.split("");

  let reversedGreetings = greetingTwo.reverse();

  return reversedGreetings.join("");
};
*/

// Do not edit below this line
module.exports = reverseString;
