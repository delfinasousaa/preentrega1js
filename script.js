//nombre
function obtenerNombre() {
    let nombreUsuario = prompt("Ingresa tu nombre");
    alert("Hola " + nombreUsuario);
    return nombreUsuario;
}

//edad
function validarEdad(nombre) {
    let edadUsuario = parseInt(prompt("Ingresa tu edad"));
    let edad = parseInt(edadUsuario);

    while (edad != parseInt(edadUsuario))  {
        alert("Dato de edad inválido");
        edadUsuario = prompt("Ingresa tu edad");
        edad = parseInt(edadUsuario);
    }

    if (edad >= 18) {
        alert("¡Bienvenida/o " + nombre + "!");
        return edad;
    } 
    else {
        alert("Lo sentimos, no eres mayor de edad...");
        return null;
    }
}

//ciudad
function preguntarCiudad() {
    let intentos = 0;
    let ciudadUsuario = prompt("Ingresa tu ciudad: BARCELONA o MADRID");

    while (ciudadUsuario !== "BARCELONA" && ciudadUsuario !== "MADRID") {
        alert("Ciudad no válida. Por favor ingresa BARCELONA o MADRID");
        ciudadUsuario = prompt("Ingresa tu ciudad: BARCELONA o MADRID");
    }

    if (ciudadUsuario === "BARCELONA" || ciudadUsuario === "MADRID") {
        alert("Ciudad encontrada");

        //fechas
        let fechaPrimera = "05/06/24";
        let fechaSegunda = "10/06/24";
        let fecha;

        while (intentos < 3) {
            fecha = prompt("Ingresa la fecha de las funciones disponibles: 05/06/24 o 10/06/24");

            // Validar fecha
            if (fecha === fechaPrimera || fecha === fechaSegunda) {
                alert("Fecha disponible");
                return ciudadUsuario;
            } else {
                alert("Fecha no disponible");
                intentos += 1;
            }
        }

        if (intentos === 3) {
            alert("Has alcanzado el máximo de intentos para ingresar la fecha");
            return null;
        }
    }
    return null;
}

let nombre = obtenerNombre();
let edad = validarEdad(nombre);

if (nombre && edad !== null) {
    let ciudad = preguntarCiudad();

    if (ciudad) {

        //las entradas
        let entrada = prompt("Ingresa tu entrada: GENERAL o VIP");

        //mientras que no sea GENERAL o VIP
        while (entrada !== "GENERAL" && entrada !== "VIP") {
            alert("Entrada no disponible");
            entrada = prompt("Ingresa tu entrada: GENERAL o VIP");
        }

        //si es GENERAL
        if (entrada === "GENERAL") {
            alert("El costo de la entrada es de 40€");
            let intentosEntradas = 0;
            let entradas;

            //mientras que sean menores los intentos a 3, pregunto entradas
            while (intentosEntradas < 3) {
                entradas = parseInt(prompt("Ingresa el número de entradas (límite de 20 entradas por persona)"));
                intentosEntradas += 1;

                if (entradas > 20 || entradas <= 0) {
                    alert("Número de entradas inválido");
                } else {
                    break;
                }
            }

            //si superan los 3 intentos, aviso y no continuo
            if (intentosEntradas === 3) {
                alert("Has alcanzado el máximo de intentos para ingresar el número de entradas");
            } else {
                let total = 40 * entradas;
                alert("El total a pagar es de: " + total + "€");

                //pago
                let abonar = prompt("¿Quieres abonar la entrada? SI (S) o NO (N)");
                let intentosAbono = 0;

                //mientras que no sea SI o NO, ni los 3 intentos, aviso y no continuo
                while ((abonar !== "SI" && abonar !== "S" && abonar !== "NO" && abonar !== "N") && intentosAbono < 3) {
                    //incrementar el contador de intentos
                    intentosAbono += 1;
                    if (intentosAbono >= 3) {
                        alert("Has excedido el número máximo de intentos");
                        break;
                    } else {
                        alert("Dato incorrecto");
                        abonar = prompt("¿Quieres abonar la entrada? SI (S) o NO (N)");
                    }
                }

                //si es SI continuo
                if (abonar === "SI" || abonar === "S") {
                    let mail = prompt("Ingresa tu correo electrónico y se te enviará un enlace para realizar el pago");
                    alert("¡Gracias!");
                } 
                else if (abonar === "NO" || abonar === "N") {
                    alert("Vuelve pronto :(");
                }
            }
        }

        //si es VIP
        else if (entrada === "VIP") {
            alert("El costo de tu entrada es de 100€");
            let intentosEntradas = 0;
            let entradas;

            //mientras que sean menores los intentos a 3, pregunto entradas
            while (intentosEntradas < 3) {
                entradas = parseInt(prompt("Ingresa el número de entradas (límite de 20 entradas por persona)"));
                intentosEntradas += 1;

                if (entradas > 20 || entradas <= 0) {
                    alert("Número de entradas inválido");
                } 
                else {
                    break;
                }
            }

            if (intentosEntradas === 3) {
                alert("Has alcanzado el máximo de intentos para ingresar el número de entradas, inténtalo más tarde");
            } 
            else {
                let total = 100 * entradas;
                alert("El total a pagar es de: " + total + "€");

                //pago
                let abonar = prompt("¿Quieres abonar la entrada? SI (S) o NO (N)");
                let intentosAbono = 0;

                //mientras que no sea SI o NO, ni los 3 intentos, aviso y no continúo
                while ((abonar !== "SI" && abonar !== "S" && abonar !== "NO" && abonar !== "N") && intentosAbono < 3) {
                    //incrementar el contador de intentos
                    intentosAbono += 1;
                    if (intentosAbono >= 3) {
                        alert("Has excedido el número máximo de intentos");
                        break;
                    } 
                    else {
                        alert("Dato incorrecto");
                        abonar = prompt("¿Quieres abonar la entrada? SI (S) o NO (N)");
                    }
                }

                //si es SI continuo
                if (abonar === "SI" || abonar === "S") {
                    let mail = prompt("Ingresa tu correo electrónico y se te enviará un enlace para realizar el pago");
                    alert("¡Gracias!");
                } 
                else if (abonar === "NO" || abonar === "N") {
                    alert("Vuelve pronto :(");
                }
            }
        }
    }
}
