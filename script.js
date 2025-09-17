//querySelectorAll por que vamos a seleccionar varios elementos.
let camposForm = document.querySelectorAll(".formulario__entrada");

//"item" es un elemento individual del arreglo //foreach selecciona todos los elementos 
camposForm.forEach(function(item) {
    item.addEventListener("keyup", function() {
        console.log(`presionando una tecla`)
    })

});
//item.addEventListener() detecta todos las letras presionadas en el formulario
//funcionn anonima se hace con el objetivo de encapsular un codigo en el que solo quiere que se haga en un acaso en especifico