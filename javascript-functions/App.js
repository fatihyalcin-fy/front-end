/* let bornDate = prompt("Doğum yılınızı giriniz");

const selam = () => 2022 - bornDate;

console.log(selam()); */

let daire = +prompt("Dairenin çapını giriniz");

const alan = () => Math.trunc(Math.PI * daire);

console.log(alan() + " m3");

let r = +prompt("r:");
let h = +prompt("h:");

let newAlan = (a, b) => (Math.PI * a * a * b).toFixed(3);

console.log(
  `${r} yarı çaplı ve ${h} yükseklikli silindirin hacmi ` +
    newAlan(r, h) +
    "'dir"
);
