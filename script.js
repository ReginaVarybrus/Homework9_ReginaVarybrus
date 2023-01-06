'use strict';

const buttonEnter = document.getElementById('enter-txt');
const buttonClear = document.getElementById('clear-txt');
const input = document.getElementById('intput-field');
const textArea = document.getElementById('text-field');
const textInput = document.getElementById('hidden-text');

function enterTextHandler () {   
    if (input.value != '') {
        textArea.textContent = input.value; 
        textInput.classList.remove('visible');
    } else {
        textInput.classList.add('visible');
    }  
}

function clearTextHandler () {
    input.value = '';
    textArea.textContent = '';
}



