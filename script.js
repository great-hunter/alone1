'use strict';

let adv = document.querySelector(".adv");
let books = document.querySelectorAll(".book");
let body = document.querySelector("body");
let titleBook = books[4].querySelector("h2>a");
let listBook2 = books[0].querySelectorAll("li");
let listBook5 = books[5].querySelectorAll("li");
let listsBook6 = books[2].querySelector("ul");
let newElem = document.createElement('li');
let listBook6;

adv.remove();
books[1].after(books[0]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
titleBook.textContent = 'Книга 3. this и Прототипы Объектов';
listBook2[3].after(listBook2[6]);
listBook2[6].after(listBook2[8]);
listBook2[9].after(listBook2[2]);
listBook5[1].after(listBook5[9]);
listBook5[9].after(listBook5[3]);
listBook5[3].after(listBook5[4]);
listBook5[7].after(listBook5[5]);
newElem.textContent = 'Глава 8: За пределами ES6';
listsBook6.append(newElem);
listBook6 = books[2].querySelectorAll("li");
listBook6[8].after(listBook6[10]);