// Conditionals

/* let score = 48 */

// let score = +prompt('Notunuzu girin : ')

/* let grade = score >= 50

console.log(grade);

// if (grade) console.log(Tebrikler, notunuz ${score} geçtiniz);

// console.log('kod sonu');


if (grade) {
    console.log(`Tebrikler, notunuz ${score} geçtiniz`);
       
} else {
    console.log('Üzgünüm kaldınız');
   
} */

/* var text;
var fruits = "kiwi";
switch (fruits.toLowerCase()) {
    case "banana":
        text = "Banana is good"
     break;
    case "orange":
        text = "I am not a fan of orange.";
    break;
    case "apple":
        text = "How you like them apples?";
    break;
    default:
        text = `I have never heard of ${fruits.toLowerCase()}`;
        break;
}
console.log(text); */

//pzt çarş perş cts
//salı cuma team work
// pazar tatil
// default yanlış gün

/* var text;
var day = prompt("Enter the day:");

switch(day.toLowerCase()){
    case "monday":
    case "wednesday":
    case "thursday":
    case "saturday":
        text = "You have in class today.";
     break;

    case "tuesday":
        text = "You have teamwork today.";
     break;

    case "friday":
        text = "You have teamwork today.";
     break;

    case "sunday":
        text = "You are free today!";
     break;

    default:
        text = "I don't know this kind of day:(";
}

console.log(text); */

/* var day = prompt("gün giriniz:");

switch (day.toLowerCase()){
    case "Pazartesi":
    case "Cumartesi":
    case "Çarşamba" :
    case "perşembe" :
        console.log("inclass");
      break;
    case "Salı":
        console.log("workshop");
      break;
    case "cuma":
        console.log("teamwork");   
      break;
    default:
        console.log("tatil");
      break;
} */

/* let i = 0;
let sum = 0;

while (i < 6) {
    sum += i
    i++
}

console.log(sum);

do {
    sum += i
    i++
}while (i<6); {
    
} */

/* let str = "Continent Design"

console.log(str.length);

console.log(str[0]);

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for(let i = 0; i <= 100; i++){
    if(i % 5 == 0) continue;
    console.log(i);
} */

/* let x = prompt (`Bir sayı giriniz: `) */

console.log(Math.random()*6+1);
console.log(Math.trunc(Math.random()*6+1));