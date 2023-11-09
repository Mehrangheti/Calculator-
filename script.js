
const reset= document.querySelector('.button');
const screen = document.querySelector(".screen");
const btns = document.querySelectorAll('.btns');
const equal = document.querySelector('.result');
const clear = document.querySelector('.clear');
const btnPI= document.querySelector('.btn-pi');
const btn= document.querySelectorAll('.btn');



btns.forEach(function(button){
    button.addEventListener("click" , function(e){
        let value= e.target.value;
        screen.value += value;
    })
})

equal.addEventListener("click" , function(e){
    if(screen.value === ""){
        screen.value = "";
    }else{
        let answer = eval(screen.value);
        screen.value= answer;
    }
    e.preventDefault();
})

clear.addEventListener("click", (e)=>{
    screen.value ="";
    
})

reset.addEventListener("click", (e)=>{
    
    document.querySelector('.screen').classList.toggle("screen-new"); 
    document.querySelector('.btns').classList.toggle("btns-new");
    document.querySelector('.clear').classList.toggle("clear-new");
    document.querySelector('.result').classList.toggle("result-new");
    document.querySelector('.button').classList.toggle("button-new");
    
    
   for (let i = 0; i < btn.length; i++) {
       btn[i].classList.toggle("btnNew");
   }


})


btnPI.addEventListener("click", (e)=>{
    screen.value += 3.14;
    
})




