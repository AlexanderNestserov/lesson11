'use strict';

const square = document.getElementById('square');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const logger = function () {
   let a = text.value;
   square.style.backgroundColor = text.value;
   text.style.backgroundColor = text.value;
};
btn.addEventListener('click', logger);//task1

const ebtn = document.getElementById('e_btn');
ebtn.style.display = 'none';//task2

const circle = document.getElementById('circle');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const log = function (event) {
   span.textContent = event.target.value;
   circle.style.width = event.target.value + '%';
   circle.style.height = event.target.value + '%';
};
range.addEventListener('input', log);
range.addEventListener('change', log);//task3

