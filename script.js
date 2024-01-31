
let lcvalue=localStorage.getItem('counter');
//console.log(lcvalue);
let counter=0;
if(lcvalue){
    counter=parseInt(lcvalue);
}

// console.log(counter);
document.getElementById('counter_block').innerText=counter;
function increment(){
    ++counter;
    localStorage.setItem('counter',counter);
    document.getElementById('counter_block').innerText=counter;
}

function decrement(){
    --counter;
    if(counter<0){
        counter=0;
    }
    localStorage.setItem('counter',counter);
    document.getElementById('counter_block').innerText=counter;
    
}
function reset(){
    counter = 0;
    localStorage.setItem('counter',counter);
    document.getElementById('counter_block').innerText = counter;


}

let incButton= document.getElementById('incButton');
let decButton= document.getElementById('decButton');
let resButton= document.getElementById('resButton');

incButton.addEventListener('click',increment);
decButton.addEventListener('click',decrement);
resButton.addEventListener('click',reset);