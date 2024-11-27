window.onload = () => {
    function dispararAlert() {
        alert("Hola este es un alert");
    };

    function validarEdad(edad) {
        try {
            if (typeof edad !== "number" || isNaN(edad))
                throw new Error("La edad debe ser un numero");

            if (edad >= 18) {
                return "Eres mayor de edad";
            } else if (edad >= 0) {
                return "Eres menor de edad";
            } else {
                throw new Error("Edad no puede ser negativa")
            }
        } catch (error) {
            return "Ocurrió un error: " + error.message;
        }
    }

    function numerosParesImparesEntreDosRangos(tipo, a, b) {
        try {
            if (typeof tipo !== "boolean") {
                throw new Error("El tipo debe ser booleano");
            } else if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
                throw new Error("Los datos ingresado deben ser numero");
            } else if (b < a) {
                throw new Error("El segundo numero debe ser mayor que el primero");
            };

            let resultado = (tipo, a, b) => {
                let acumulador = new Array();
                for (let i = a; i <= b; i++) {
                    if (tipo === true) {
                        (i % 2 === 0) ? acumulador.push(i) : null;
                    } else {
                        (i % 2 !== 0) ? acumulador.push(i) : null;
                    }
                }
                return acumulador;
            };
            // console.log(resultado(true, 3, 10));
            return resultado(tipo, a, b);

        } catch (error) {
            return "Ups, ocurrió un error: " + error.message;
        }
    }
    // console.log(numerosParesImparesEntreDosRangos(false, -10, 10));

    let etiqueta = document.getElementById("texto");
    etiqueta.addEventListener("keyup", (event) => {
        event.target.value = event.target.value.toUpperCase();
    });

    let llenarTablaCliente = () => {
        document.getElementById("td1").textContent = "Nombre";
        document.getElementById("td3").textContent = "Apellido";
        document.getElementById("td5").textContent = "Fecha de Nacimiento";

        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let fechaNacimiento = document.getElementById("fechaNacimiento");

        nombre.addEventListener("keyup", (event) => {
            document.getElementById("td2").textContent = event.target.value;
        });
        apellido.addEventListener("keyup", (event) => {
            document.getElementById("td4").textContent = event.target.value;
        });
        fechaNacimiento.addEventListener("", (event) => {
            document.getElementById("td6").textContent = event.target.value;
        });

    }
    return llenarTablaCliente();
};
