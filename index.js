var moment = require("moment");

console.log("Hey there!");
console.log(moment().endOf("day").fromNow());

var name = "Mike";
var time = "this loveliest of days";
console.log(`Hello ${name}, how are you ${time}?`);

var question = "Who is your daddy and what does does he do? ";

var answer = "I don't have a daddy...";

console.log(`${question}` + `${answer}`);

var fibonacci = {
  [Symbol.iterator]: function* () {
    var pre = 0,
      cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  },
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
