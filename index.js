var moment = require("moment");

console.log("Hey bro!");
console.log(moment().endOf("day").fromNow());

var name = "Crispin";
var time = "this loveliest of days";
console.log(`Hello ${name}, how are you ${time}?`);

var question = "Who is your daddy and what does does he do? ";

var answer = "He is a man who loves dancing...";

console.log(`${question}` + `${answer}`);
