// variable
// ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে

// ভেরিয়েবল হচ্ছে কম্পিউটার মেমোরি একটি নির্দিষ্ট জায়গা যেখানে বিভিন্ন মান সংরক্ষণ করে রাখা যায়

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন

// 1. Letter(A-z)
// 2. Number {0-9}
// 3. UnderScore (_)
// 4. Doller ($)

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন না

// 1. কি  ওয়ার্ড  ব্যবহার  করা  যাবে  না

// 2. নম্বর  শুরুতেই  ব্যবহার  করা  যাবে  না
// 3. স্পেস  দেওয়া  যাবে  না

// 4. কেস  সেনসিটিভ  হওয়ায়  সেইম  টু  সেইম  হতে  হবে

// note :  CamelCase

var name = "gias uddin";

// Key Words

// জাভাস্ক্রিপ্ট  আপনার  জন্য  কিছু  জিনিস  (ফাঙ্কশন ) অলরেডি  তৈরী  করে  রাখছে  এইগুলাই  রিজার্ভ ওয়ার্ড  অথবা  কি  ওয়ার্ড

if (true) {
  console.log("yesssssss");
}

// এই  গুলা মুখুস্থ  করার   কোনো  জিনিস  না  তাই  চিন্তা   করার  দরকার  নাই  আস্তে  আস্তে  সব  এমনেই মনের  মধ্যে  বসে  যাবে  ব্যাবহার  করতে  করতে

// DAta Types

// আমরা  মূলত  এখানে  স্ট্রিং  এবং  নম্বর  এবং  বুলিয়েন  ডাটা  টাইপ   আলোচনা  করবো

// 1. string

var name1 = "hero Alom";

console.log(typeof name1);

// number data types
var roll = 71;

console.log(typeof roll);

// boolean data types
var statement = true;
console.log(typeof statement);

// *parseFloat parseInt

var num1 = 70.78;
var num2 = 70;

var sum = num1 + num2;
console.log(parseInt(sum));
// console.log(parseFloat(sum));

// ## If else statement

if (4 > 5) {
  console.log("4 is bigger than 5");
} else {
  console.log("5 is bigger than 4");
}

// 2nd examaple with condition
var number = 50;
if (number % 2 == 0) {
  console.log(" wow its even number");
} else if (number % 2 == 1) {
  console.log("wow its Oddd number");
} else {
  console.log("dont knwo whats that ");
}

// 3rd examaple

// nested condition

var number2 = 30;

if (number2 > 20) {
  if (typeof number2 == "number") {
    console.log("number 2 is a number");
  } else if (typeof number2 == "string") {
    console.log("wow number 2 is string");
  } else {
    console.log("maybe number 2 is boleen");
  }
} else {
  console.log(" number 2 is very small number please try  bigger then 20");
}

// Grade countunting

var result = -39;
if (result > 0) {
  if (result < 33) {
    console.log("wow  tumi fail korco !! Now  Breakup dont call me again");
  } else if (result >= 33 && result < 40) {
    console.log("You just passed this exam (kono moto)");
  } else if (result >= 40 && result < 50) {
    console.log("your grade is D");
  } else if (result >= 50 && result < 60) {
    console.log("your grade is C");
  } else if (result >= 60 && result < 70) {
    console.log("your grade is B");
  } else if (result >= 70 && result < 80) {
    console.log("your grade is A-");
  } else if (result >= 80 && result < 90) {
    console.log("your grade is A+ ");
  } else if (result > 90 && result <= 100) {
    console.log("your grade is  excillent ");
  } else {
    console.log("cant not found please try again yoru grade range is 0-100");
  }
} else {
  console.log("please try with positive number ");
}

// ** Switch statement  with condition

var num5 = 10;

switch (num5) {
  case 1:
    console.log("hello");
  case 5:
    console.log("hoiceee");
}

// data structure
// Array

var box = ["heroalom", 10, "bangladesh", "dhaka", 71];

// ** অ্যারের প্রতিটি মানকে এলিমেন্ট বলে অর্থ্যাৎ উপরের box অ্যারেতে 5 টি এলিমেন্ট আছে। প্রত্যেকটি এলিমেন্ট যেকোন কিছু হতে পারে, একটা স্ট্রিং কিংবা একটা পূর্নসংখ্যা এমনকি একটা অবজেক্ট।

// ** প্রথম মানের জন্য ০ শূন্য দিয়ে শুরু করে এভাবে ক্রমানুসারে পরেরগুলির জন্য জাভাস্ক্রিপ্ট index নাম্বার দেয়। একসেস নেয়ার সময় প্রথমে ভেরিয়েবলের নাম এরপর তৃতীয় বন্ধনীর (square bracket []) এর ভিতর index নাম্বারটি। যেমন ২য় মানটি একসেস করতে চাইলে box[1] এভাবে।

// ** অ্যারে বানাতে হয় প্রথম উদাহরনের মত, তৃতীয় বন্ধনীর ভিতর single বা double কোটেশনের ভিতর মান দিতে হয় এবং প্রতিটি মান কমা (,) দিয়ে আলাদা রাখতে হবে। এভাবে অ্যারে তৈরীর প্রক্রিয়ার টেকনিকাল নাম হচ্ছে "অ্যারে লিটারেল"।

// এছাড়া new কিওয়ার্ড Array() ফাংশন (এটার নাম আসলে কনস্ট্রাক্টর) ব্যবহার করে অ্যারে বানানো যায় যেমন উপরের অ্যারেটি চাইলে নিচের মত করে তৈরী করতে পারেন।
var box2 = new Array("HTML", "CSS", "JavaScript", "PHP");

// Array fucntion
let stuff = ["A", "B", "C", "D", "E", "F"]; // test array

// Useful array methods
stuff.pop(); // removes the last item in the array (returns what was removed)
//stuff = ['A', 'B', 'C', 'D', 'E']
//return: ['F']
stuff.shift(); // removes the first item in the array (returns what was removed)
//stuff = ['B', 'C', 'D', 'E', 'F']
//return: ['A']
stuff.push("G"); // adds an item to the end of the array (returns the new length of the array)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//return: 7
stuff.unshift("Z"); // adds an item to the beginning of the array (returns the new length of the array)
//stuff = ['Z', 'A', 'B', 'C', 'D', 'E', 'F']
//return: 7
stuff.indexOf("C"); // returns the index number of the item in the array
//return: 2
stuff.splice(2); // gets rid of the index item and after it (returns what was removed)
//stuff = ['A', 'B']
//return: ['C', 'D', 'E', 'F']
stuff.splice(2, 2); // second argument determines how many items are removed in total (including index) (returns what was removed)
//stuff = ['A', 'B', 'E', 'F']
//return: ['C', 'D']
stuff.splice(2, 0, "Hello"); // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'C', 'D', 'E', 'F']
//return: []
stuff.splice(2, 3, "Hello"); // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'F']
//return: ['C', 'D', 'E']
stuff.slice(2); // same as splice but doesn't modify the original array (returns what would be removed)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: ['C', 'D', 'E', 'F']
stuff.concat(["G", "H", "I"]); // returns the combination of array "stuff" with the array argument
//return: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
stuff.toString(); // returns the combination of elements of the array into a string
//return: "A,B,C,D,E,F"
stuff.join("-"); // works the same as toString() but the argument determines what is between each element in the string
//return: "A-B-C-D-E-F"
stuff.reverse(); // reverses an array's elements (returns same thing)
//stuff = ['F', 'E', 'D', 'C', 'B', 'A']

var numbers = [1, 2, 3, 4, 5, 6, 7];

// push
numbers.push(8);
console.log(numbers);

//**  */ pop

numbers.pop(8);
console.log(numbers);

//** */ shift

numbers.shift();
console.log(numbers);

// ** unshift
numbers.unshift(15);
console.log(numbers);

// console.log(numbers.toString())
// console.log(numbers.reverse())
// console.log(numbers.join("-"))
// console.log(numbers.slice(1,6))

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
