// Creo array de respuestas. 
const  answers = [
    "Seguramente",
    "Sí",
    "No", 
    "Puede Ser",
    "Es Tu Destino",
    "No Puedo Predecirlo Ahora", 
    "No Cuentes Con Eso", 
    "Muy Dudoso",
    "Todo Apunta a Que Sí"
 ]
 // seleccionar el boton
 const button = document.querySelector("button");
 // seleccionar la bola de cristal
 const crystalBall = document.querySelector(".bola");
 // agrego un event listener para el clicki
 const glass = document.querySelector(".glass");
 button.addEventListener("click", magicTime);
 // Funcion que agrega el estado de animacion a la bola y da las respuestas
 function magicTime() {
     crystalBall.classList.add("animate");
     glass.classList.add("brighter");
     crystalBall.addEventListener("animationend", () => {
         crystalBall.classList.remove("animate");
         var randomNumber = Math.floor(Math.random() * (answers.length));
         var innerText = document.querySelector(".answer").innerHTML = answers[randomNumber];
     
     });   
 }
 
 
 