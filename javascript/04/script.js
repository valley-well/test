'use strict'

//for (let i = 0; i < 8; i += 1 ) {
//    console.log(i + " hello world")
//}

let msg = "external";
{
    msg = "internal";
    console.log(msg);
}
console.log(msg);


//for (const data of [1, 2, 'dooog!', 1, 2, 'cat!']) {
//    console.log(data);
//}

//for (const servant of ['犬', '猿', '雉']) {
//  for (let n = 1; n <= 3; n += 1) {
//    console.log(`${servant}${n}号！`);
//  }
//}

const element = document.createElement('p');
console.log(element);

element.textContent = "new element";

document.body.appendChild(element);

console.log("test");
console.log("test");
console.log("test");

const ul = document.getElementById("list");

for (const servant of ['犬', '猿', '雉']) {
    for (let i = 1; i <= 5; i++) {
        const newListElement = document.createElement('li');
        newListElement.textContent = `${servant}${i}号`;
        ul.appendChild(newListElement);
    }
}


