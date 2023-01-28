// console.log(firstName);

var num1 = 10;
var num2 = "20.666";
// const convertNum2 = parseFloat(num2);

const sum = num1 * num2;

// console.log(sum.toFixed(2));

var num3 = "200.1578";

// console.log(parseFloat(num3));

// if else start from here on

// var num5 = 20;
// var num6 = 40;

// if (num5 == 20 || num6 == 30) {
//   console.log("this is 20");
// } else if (num5 == 100 && num6 == 100) {
//   console.log("this is 100");
// } else {
//   console.log("kono tai tik na");
// }

// var num5 = 100;

// if (num5 > 100) {
//   console.log("this is bigger then 100");
// } else if (num5 < 100) {
//   console.log("this is smaller then 100");
// } else {
//   console.log("this is equal  100");
// }

// var num1 = 600;
// var num2 = 800;
// var num3 = 500;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 shobtheke boro");
// } else if (num2 > num3) {
//   console.log("num2 shobtheke boro");
// } else {
//   console.log("num3 shobtheke boro");
// }

// var number = "300";

// if (number == 30) {
//   if (typeof number == "string") {
//     console.log("ok its 30 and also a string");
//   } else {
//     console.log("its equal to 30 but not a string");
//   }
// } else {
//   console.log("number not equal to 30");
// }

// console.log(typeof number);

// var num = 100;

// if (num % 2 != 0) {
//   console.log("this is odd number");
// } else {
//   console.log("this is even number");
// }

// 0-32=F
// 33-49=D
//50-59=C
//60-69=B
//70-79=A
// 80-100=A+

var result = 29;

if (result > 100) {
  console.log("bhai result kamne 100 er beshi hoi bolen??");
} else if (result <= 100 && result >= 0) {
  if (result >= 0 && result < 33) {
    console.log("F");
  } else if (result > 32 && result < 50) {
    console.log("D");
  }
} else {
  console.log("bhai result ki 0 theekw kom paicen???");
}
