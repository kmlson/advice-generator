let  id = document.querySelector(".adviceId");
let advice = document.querySelector(".advice-text");
let button = document.querySelector(".dice");

async function getAdvice() {
    try {
        let random = Math.floor(Math.random() * 220);
        let advice = await fetch("https://api.adviceslip.com/advice/"+random);
        return advice.json();
    }catch(e){
        console.log(e);
    }
    
}

button.addEventListener("click",()=>{
    getAdvice().then(data => {
        id.innerHTML="Advice #"+data.slip.id;
        advice.innerHTML = '"'+data.slip.advice+'"';
       
     })
})

function init() {
    getAdvice().then(data => {
        id.innerHTML="Advice #"+data.slip.id;
        advice.innerHTML = '"'+data.slip.advice+'"';
       
     })
}

init();




