// console.log("I'm from file");

// var x = 7;
// var y = 5;
// var y = x;

// console.log(x);
// console.log({ x });
// console.log({ y });

// /* var alert = "Merhaba"
// console.log(alert);
//  */
// /* alert('Hey')
//  */

// /* var a = "c";
// console.log(a);

//  */
// /* const aa = 5;
// console.log(aa);

// console.log(typeof 20);
// console.log(typeof Infinity);

// var car = "engine"
// console.log(typeof car);

// var user = 'Fatih'
// var v = `merhaba ${user}`
// console.log(v);

// console.log(Boolean(" "));

// console.log(Boolean(3 == 5));

// console.log(Boolean(3 < 5));

// console.log(Boolean(0));

// console.log(Boolean("0"));

// console.log(Boolean(null));

// console.log(2 === '2');

// console.log(2 == '2.0'); */

// var x = 0.1 + 0.2;
// console.log(x);
// console.log(+x.toFixed(5));

// console.log(15 + 25);
// console.log(015 + 025);

// console.log(0234 + 012);

// var z = 22;
// var t = "2";
// console.log(z - t);

// /* var input = prompt("Enter user name:")
// console.log(typeof input);

// var input = +prompt("Enter age:")
// console.log(typeof input); */

// /* var c = '3';
// console.log(-c, typeof -c);

// var a = 'a';
// var b = 2;

// console.log(typeof a !== typeof b); */

// /* console.log('FullStack' > 'Fuo'); */

// let score = 30;
// let grade = score >= 50;

// if (grade) {
//   console.log(`You passed the exam with the score of ${score}`);
// } else console.log(`You failed with the score of ${score}`);

/* 
const n = Number(prompt("Enter a number"));
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log("Sum:", sum); */

/* const num = Number(prompt("Enter a number"));
let randomNum = 0;

if (num > 1 && num < 100) {
  for (let i = 1; i <= num; i++) {
    randomNum = Math.round(Math.random() * 100);
    console.log(`${i}.random number: ${randomNum}`);
  }
} else {
  console.log("Düzgün sayı gir");
} */

/* const primeNum = Number(prompt("Enter a number"));
let isPrime = true;

for (let i = 2; i < primeNum; i++) {
  if (primeNum % i === 0) {
    console.log(`${primeNum} is not a prime number.`);
    isPrime = false;
    break;
  }
}

if (isPrime === true) {
  console.log(`${primeNum} is a prime number.`);
} */

/* let toplam = 0;

for (let i = 0; i < 10; i++) {
  if (i > 2 && i < 5) {
    continue;
  } else {
    toplam += i;
  }
}
console.log(toplam); */

/* let not = prompt("Notu Giriniz");

while (not > 100 && not < 1) {
  prompt("Notunuzu girin");
  console.log(`Notunuz ${not}`);
} */

/* function printHello() {
  console.log("Hello");
}

printHello();

function greet(firstName, lastName = "") {
  console.log(firstName, lastName);
}

greet(prompt("Name")); */

/* function hesap(ad, yıl) {
  const age = new Date().getFullYear() - yıl;
  return `${ad} isimli kişinin yaşı ${age}`;
}

console.log(hesap(prompt("Adınızı giriniz"), prompt("Doğum yılınızı giriniz"))); */

/* function oddOrEven(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}

const number = prompt("Lütfen numara girin");

const sayi = oddOrEven(number);

console.log(`${number} is ${sayi}`); */

/* let oddOrEven = function (num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
};

console.log(oddOrEven(6)); */

/* const findBiggest = function (x, y, z = 15) {
  let biggest = x;

  if (y >= x) {
    biggest = y;
  }

  if (z >= biggest) {
    biggest = z;
  }

  return biggest;
};

console.log(`The biggest: ${findBiggest(2, 16, 17)}`); */

/* const numbers = [3, 4, 5, 2, "üç", "beş"];

console.log(numbers.includes(5));

console.log(numbers.lastIndexOf(7));

const strNumbers = numbers.join(" ");

console.log(strNumbers);

const data = [3, 2, 3, 456, 4, 32, 6, 7];

console.log(data.slice(2, 4));

const message = ["The weather", "is nice"];

const now = [new Date().toLocaleString()];

console.log(now);

const concat = message.concat(now);

console.log(concat);
 */

/* const dizi = [55, 76, 44, 36, 112, 23];
let sum = 0;
for (let i = 0; i < dizi.length; i++) {
  sum = sum + dizi[i];
}

console.log((sum / dizi.length).toFixed(2)); */

/* const cars = ["BMW", "Mercedes", "BMW", "Opel", "Opel", "Mercedes", "Opel"];

for (let fatih of cars) {
  console.log(fatih);
}

console.log("****");

let sum = 0;
cars.forEach((car) => (sum += car));

console.log(sum);
 */

/* const prices = [100, 23, 12, 312, 132, 412];

let names = ["FAtih", "ahmet", "mehmet"];

const upperNames = names.map((n) => n.toLocaleUpperCase());

console.log(upperNames); */

const euro = 20.04;
const dollar = 19.69;
const tl = [122, 131, 145, 1541, 12345];

const euroPrices = tl.map((x) => Number(x / euro).toFixed(2));

console.log(euroPrices);
