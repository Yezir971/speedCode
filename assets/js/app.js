"use strict";

document.addEventListener('DOMContentLoaded', function(){
    let button = document.getElementsByTagName('button');
    let screen = document.getElementById('mdp');
    let code = "2589";
    console.log(button)
    let size = button.length;
    
    let j =0;
    if(j<3){
        for(let i=0; i<size ; i++){
            button[i].addEventListener('click', ()=>{
                screen.value += button[i].value
                console.dir(button[i].value);
            })
        }
        j++;
    }
    console.log('gg')
});