let signosChinos = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];

function calculaSigno(){
    let anio = parseInt(prompt("Ingresa tu año de nacimiento:"));
    let signo = signosChinos[anio % 12];
    console.log(`Tu signo chino es ${signo}`);
}

function adivinaNum(){
    let min = 1;
    let max = 100;
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i = 1; i <= 10; i++) {
        let intento = parseInt(prompt("Intento " + i + ": Adivina el numero entre 1 y 100"));

        if(intento === numero){
            alert("Muy bien, adivinaste el numero en " + i + " intentos.");
            return;
        } 
        else if(intento < numero){
            alert("El numero es mayor. Intentos restantes: " + (10 - i));
        } 
        else{
            alert("El numero es menor. Intentos restantes: " + (10 - i));
        }
    }

    alert("Que lastima, ya no tienes más intentos, pero el numero era: " + numero);
}
















































