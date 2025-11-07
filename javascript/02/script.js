'use strict'
console.log("Hellogging");
console.log((10 + 5) * 2 / 5 + 4);  // → 10
console.log(-5 + 8);  // → 3
console.log(2 ** 3);  // → 8
console.log(10 % 3);  // → 1（10÷3は3余り1）
console.log('Hello' + ' ' + 'World' + '!!'); // → Hello World!!
console.log('1たす1は' + 2); // →　1たす1は2

const height = 1.80;
let weight = 70;
weight = weight + 10;
weight += 10;
console.log('体重' + weight + 'kg／身長' + height * 100 + 'cmのBMI：');
console.log(weight / (height * height));

let a = 10;
let b = 10;
let c = 10;
let d = 10;

a++;
++b;
c--;
--d;

console.log('a = ' + a);
console.log('b = ' + b);
console.log('c = ' + c);
console.log('d = ' + d);

// Open pop-up window of brawser and input bmi directly

const bmi =window.prompt('Input your BMI');
console.log(`Your BMI is ${bmi}`);

const p_element     = document.querySelector('p');
const secp_element  = document.getElementById("secondp");
const thrdp_element = document.getElementById("thirdp");

p_element.textContent = `Your BMI is ${bmi}: `;

if (bmi > 25) {
    //console.log('Fat');
    p_element.textContent += 'Fat';
    thrdp_element.textContent = 'Big';
} else if (bmi < 18.5) {
    //console.log('Be fat');
    p_element.textContent += 'Be fat';
    thrdp_element.textContent = "Skull";
} else {
    //console.log('Keep');
    p_element.textContent += 'Keep';
}


const msg = bmi > 25 
? 'Fat' : (bmi < 18.5 ? 'Be fat' : 'Keep');
console.log(msg);

