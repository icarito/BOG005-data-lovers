import data from "./data/harrypotter/data.js";
import {sortSpecies} from "./data.js"

//Mostrar sección a través de botón

let btnShowSectionCharacters = document.getElementById("nav-characters")
btnShowSectionCharacters.addEventListener("click", changeBtnStyle)

function changeBtnStyle(){
  document.getElementById("showCharacters").style.display = "none"
  document.getElementById("showCharacters").style.display = "flex"
}

//Función visualizar personajes
const allCharacters = data.characters.slice(0, 21);
const content = document.querySelector("#showCharacters");

function showAllCharacters(data) {
  data.forEach(
    (element, i) =>
    //Template string
    (content.innerHTML +=`<section class="card">
    <ul><img class="wand"  src="Img/icons8-harry.png" alt="Imagen generica para personajes">
    <br>
    <h3 class="name-characters">${element.name}</h3>
    <button data-id=${i} class="btn buttonShow"> Ver +
  </button></ul>
  </section>`)
    //Interpolacion de variables
  );
}
showAllCharacters(allCharacters);

const btnVer = document.querySelectorAll(".buttonShow")
const information = document.querySelector("#informationCharacters")
btnVer.forEach((button) => {
  button.addEventListener("click", (event) => {
    const i = event.target.dataset.id
    information.innerHTML = `<div class="information">
  <strong>Nombre:</strong> ${allCharacters[i].name ? allCharacters[i].name : "Sin información"}
  <br> <strong>Fecha de Nacimiento:</strong> ${allCharacters[i].birth ? allCharacters[i].birth : "Sin información"}
  <br> <strong>Casa de Hogwarts:</strong> ${allCharacters[i].house ? allCharacters[i].house : "Sin información"}
  <br> <strong>Tipo de Mago:</strong> ${allCharacters[i].species ? allCharacters[i].species : "Sin información"}
  </div>`
  })
})


document.getElementById("pruebaOrdenar").addEventListener("click",() =>{
  console.log('ksjhaskhdksahd', sortSpecies(allCharacters))
  showAllCharacters(sortSpecies(allCharacters))
})
/* const content2 = document.querySelector("#sortCharacters")

function sortAllCharacters() {
  allCharacters.forEach.sort((
    (element, i) =>
    //Template string
    (content2.innerHTML +=`<section class="card">
    <ul><img class="wand" src="Img/icons8-harry.png" alt="Imagen generica para personajes">
    <br>
    <h3 class="name-characters">${element.name}</h3>
    <h4 class="name-characters">${element.species}</h4>
    </ul>
  </section>`)
    
    //Interpolacion de variables
  ));
console.log(sortAllCharacters)
  }
sortAllCharacters(); */







/* function sortAllCharacters(){
let salida = "";
for (let i = 0; i < allCharacters.length; i++){
let species = (allCharacters[i].species)
 salida = species.sort()
  };
  
}
console.log(salida) */


/* let salida = "";
console.log(species)

allCharacters.forEach(sortAllCharacters)

function sortAllCharacters ()
 */
