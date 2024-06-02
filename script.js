//username
let nombreUsuario = prompt("Ingresa tu nombre");
let nombre = nombreUsuario;
alert("Hola " + nombre);

//userage
let edadUsuario = prompt("Ingresa tu edad");
let edad = parseInt(edadUsuario);

if (edad >= 18) {
    alert("Bienvenida/o a nuestra página: " + nombre);
} 
else if (edad < 18) {
    alert("Lo sentimos, no eres mayor de edad");
}
else {
    alert("Dato de edad inválido");
}

//place
let ciudadUsuario = prompt("Ingresa tu ciudad: BARCELONA o MADRID");

if (ciudadUsuario == "BARCELONA" || "MADRID") {
    let fecha = prompt("Ingresa la fecha de las funciones disponibles: 05/06/24 o 10/06/24");
    if (fecha==="05/06/24" || fecha==="10/06/24") {
        let entrada = prompt("Ingresa tu entrada: GENERAL o VIP");
            if (entrada=== "GENERAL") { 
                alert("El costo de la entrada es de 40€");
                let entradas = prompt("Ingresa el número de entradas (limite de 20 entradas por persona)");
                let entradaGeneral = 40;
                let total = entradaGeneral * entradas;
                alert("El total a pagar es de: " + total + "€");
            }
            else if (entrada=== "VIP") {
            alert("El costo de tu entrada es de 100€");
            let entradas = prompt("Ingresa el número de entradas (limite de 20 entradas por persona)");
            let entradaVip = 100;
            let total = entradaVip * entradas;
            alert("El total a pagar es de: " + total + "€");
        }
    }
    else {
        alert("Fecha no disponible");
    }
}

else {
    alert("Ciudad no encontrada");
}

let abonar = prompt("¿Quieres abonar la entrada? SI (S) o NO (N)");
if (abonar === "S" || "SI") {
    let mail =prompt("Ingresa tu mail y seras redirigida/a al centro de pago online");
    alert("Gracias por tu compra!");
}
else if (abonar === "NO" || "N") {
    alert("Vuelve pronto :(");
}