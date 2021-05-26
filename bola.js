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
/*randomIndex = randomize();
key = Object.keys(origWords)[randomIndex];
p.textContent = key;
playSound(origWords[key]);
     const p = document.getElementById("randomWord");
const myWords = [
    {
       text: "alpha",
       audio: "alpha.mp3"
    },
    {
       text: "bravo",
       audio: "bravo.mp3"
    }
 ];
 let remainingWords = [];

function randomize() {
  if (remainingWords.length === 0) remainingWords = myWords.slice();
  let length = remainingWords.length;
  let randomIndex = Math.floor(Math.random() * length);
  const word = remainingWords[randomIndex];
  remainingWords.splice(randomIndex, 1);
  console.log(word);
  console.dir(p);
  p.textContent = word.text;
// your audio code here like audio.play(word.audio);
};*/
 