
function mostrarPagina(numero) {
    var paginas = document.getElementsByClassName("pagina");
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = "none";
    }
    document.getElementById("pagina" + numero).style.display = "block";
}

