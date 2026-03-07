console.log("Conexion de dados.js");

function dadoAlumno() {

    let opcion = parseInt(prompt("Elige una opcion:\n1.-6 caras 2.-20 caras 3.-100 caras"));
    let caras = NaN;

    switch(opcion) {

        case 1:
            caras = 6;
            break;

        case 2:
            caras = 20;
            break;

        case 3:
            caras = 100;
            break;

        default:
            alert("La opcion ingresada no fue correcta");
            break;
    }
    let resultado = Math.floor(Math.random() * caras + 1);
    alert(`El resultado del dado es ${resultado}`);
}