window.onload = () => {
    let body = document.querySelector("body")
// 1.1 Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises. 
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ulCountries = document.createElement('ul')
countries.forEach((item)=> {
    let li = document.createElement('li')
    li.innerText = item
    ulCountries.appendChild(li)
})
body.appendChild(ulCountries)


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let toDelete = document.querySelectorAll('.fn-remove-me')
    toDelete.forEach((value) => {
        value.remove()
    })


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
  const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let divA = document.querySelector('div[data-function="printHere"]')
let ulCars = document.createElement('ul')

cars.forEach((data) => {
    let li = document.createElement('li')
    li.innerText = data
    ulCars.appendChild(li)
})
divA.appendChild(ulCars)


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

 const countries2 = [
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];

let divList = document.createElement("div")
divList.setAttribute("id","divList");

for(let i = 0; i < countries2.length; i++) {
    let newDiv = document.createElement("div")
    let newH4 = document.createElement("h4")
    let newContent = document.createTextNode(countries2[i].title)
    newH4.appendChild(newContent)
    newDiv.appendChild(newH4)
    let newImg = document.createElement("img")
    newImg.setAttribute("src",countries2[i].imgUrl)
    newDiv.appendChild(newImg)
    divList.appendChild(newDiv)

    // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
    let btnDelete = document.createElement("button")
    btnDelete.textContent = "Borrame!"
    btnDelete.addEventListener("click", () => {
        newDiv.remove()
    })
    newDiv.appendChild(btnDelete)
    
}
body.appendChild(divList)

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último  elemento de la lista.

let boton = document.createElement('button')
let lista = document.getElementById("divList");
body.appendChild(boton)
boton.innerText = 'CLICK'
boton.addEventListener('click', () => {
    lista.removeChild(lista.lastElementChild)
})
}