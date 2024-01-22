"use strict";

document.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementsByTagName('button');
    let screen = document.getElementById('mdp');
    
    console.log(button)
    let size = button.length;
    for(let i=0; i<size ; i++){
        button[i].addEventListener('click', ()=>{
            screen.value += button[i].value
            console.dir(button[i].value);

        })
    }
});