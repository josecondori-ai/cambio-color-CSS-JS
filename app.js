//Creacion o inicilizacion de variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn=document.querySelector('#btn')
let body=document.querySelector('body')







//funciones
const cambiaColor = () => {
    let hexcolor= '#'
    for (let i = 0; i < 6; i++) {
      
        hexcolor=hexcolor+hex[obtengoNumero()]
        console.log(hexcolor)
        
    }
    body.style.backgroundColor = hexcolor
 }

 const obtengoNumero = () => { 
    return Math.floor(Math.random() * hex.length)
 }


//evento
 btn.addEventListener('click',cambiaColor)




















