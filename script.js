'use strict';

const buttonEnter = document.getElementById('enter-txt');
const buttonClear = document.getElementByClassName('clear-button');
const input = document.getElementById('output-field');
const textArea = document.getElementByClassName('text');

// function enterText () {
//     console.log('+');
//     textArea.value = input.value;
// }



// function clearText () {
//     console.log('++');
//     input.value = '';
// }

buttonEnter.addEventListener('click', () => console.log('Press button'));
// На странице находится инпут и две кнопки и div.
// Пользователь может ввести что-то в инпут и нажать на кнопку,
// после этого в div выше должна отобразится строка с тем что было введено в инпуте.
// Вторя кнопка очищает инпут и div.
// Добавте валидацию чтоб с пустым инпутом ничего не добавлялось и под инпутом 
// писалась надпись: "заполните это поле".
