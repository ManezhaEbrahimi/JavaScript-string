let stringName = "JavaScript is easy to learn! JavaScript";
let text = "HTML is easy to learn!";

console.log(stringName.length);
console.log(stringName.charCodeAt(1));
console.log(stringName.charAt(1));

console.log(stringName.includes("j"));
console.log(stringName.includes("J"));
console.log(stringName.indexOf("easy"));
console.log(stringName.lastIndexOf("JavaScript"));

console.log(stringName.startsWith("easy"));
console.log(stringName.endsWith("JavaScript"));
console.log(stringName.slice(11, 13));
console.log(stringName.substring(11, 13))
// console.log(stringName.replace("JavaScript", "JAVA"));
console.log(stringName.replaceAll("JavaScript", "JAVA"));
console.log(text.concat(text));
console.log(stringName.toLocaleLowerCase());
console.log(stringName.toLocaleUpperCase());
console.log(stringName.trim);

const infinty = 1 / 0;
console.log(infinty);

let nanVal = 100 / "Apple";
console.log(nanVal);

console.log(isNaN(nanVal));
console.log(NaN === NaN);

console.log(Math.PI);
console.log(Math.round(3.5));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.9));
console.log(Math.trunc(3.987));
console.log(Math.random()*6) +1;

let arr = [10, 20, 25, 30]
let max = Math.max(...arr)
console.log(max)