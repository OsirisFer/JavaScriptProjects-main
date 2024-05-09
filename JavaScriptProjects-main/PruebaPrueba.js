var hoistedVariable = "This variable was hoisted!"; //var es una variable global del programa
const hoistedConstant = "This constant was hoisted!"; //const es una constante global
let hoistedLet = "This let was hoisted!"; //let es una variable local del módulo

let estoEsUnObjeto = {
    nombre: "Juan",
    edad: 30,
    casado: false
};

let otroObjeto = new Object();
otroObjeto.nombre = "Juan";
otroObjeto.edad = 30;
otroObjeto.casado = false;


function mostrarPagina(numero) {
    var paginas = document.getElementsByClassName("pagina");
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = "none";
    }
    document.getElementById("pagina" + numero).style.display = "block";
}

