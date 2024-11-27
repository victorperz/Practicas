window.onload = () => {
    console.log("Hola Mundo!");

    let a = 1;
    let b = 4;
    console.log(a + b);

    function sumar(a, b) {
        return a + b;
    }

    function mostrarSuma(a, b) {
        console.log(sumar(a, b));
    }

    const sumButton = document.querySelector("#sumButton");
    sumButton.addEventListener('click', () => mostrarSuma(1, 3));

    function imprimirNumeros() {
        for (i = 0; i <= 10; i++) {
            console.log(`Numero: ${i}`);
        }
    }

    const mostrarNumeros = document.querySelector("#mostrarNumeros");
    mostrarNumeros.addEventListener('click', () => imprimirNumeros());

    let arreglo = ["pepito", "laura", "juancito", "pepe", "lila"];
    arreglo.forEach(nombre => {
        console.log(nombre);
    });

    let edad = 28;
    if (edad >= 18) {
        console.log("Es MAYOR de edad");
    } else {
        console.log("Es MENOR de edad");
    }

    // 7. Implementa una función que devuelva el cuadrado de un número.

    function calcularCuadrado(a) {
        console.log(`El cuadrado de un numero es: ${a * a}`);
    }
    calcularCuadrado(-5);

    // 8. Utiliza un bucle para imprimir los números pares del 1 al 10.

    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0)
            console.log(i);
    }

    // 9. Crea un objeto persona con propiedades nombre y edad, e imprímelo.

    let persona = {
        nombre: "victor",
        edad: 14
    }
    console.log(persona);

    // 10. Escribe una función que determine si un número es par o impar.

    function numeroParImpar(a) {
        if (a % 2 === 0) {
            console.log(`El numero ${a} es PAR`);
        } else {
            console.log(`El numero ${a} es IMPAR`);
        }
    }

    numeroParImpar(1);

    // 11. Declara un arreglo con números y calcula su suma utilizando el método reduce.
    let arreglito = [1, 5, 1, 6];
    console.log(arreglito.reduce((acumulador, valorActual) => acumulador + valorActual, 0));

    // 12. Crea una función que concatene dos cadenas de texto.
    function concatenarDosTextos(texto1, texto2) {
        return texto1 + " " + texto2;
    }
    console.log(concatenarDosTextos("Hola soy yo", "Limpiecito como un sol"));

    // 13. Utiliza un bucle para imprimir los números del 10 al 1 en orden descendente.
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

    // 14. Declara un objeto coche con propiedades marca, modelo y año, e imprímelo.

    let coche = {
        marca: "Chevrolet",
        modelo: "Aveo",
        año: 1997,
    }
    console.log(coche);
    // 15. Escribe una función que determine si una palabra es palíndroma.
    function esPolindroma(palabra = "osa") {

        let palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
        let palabraInversa = palabraLimpia.split('').reverse().join('');
        return palabraLimpia === palabraInversa ? `La palabra ${palabra} es polindroma` : `La palabra ${palabra} NO es polindroma`;
    }

    console.log(esPolindroma());

    //16. Declara una variable y asigna un número. Luego, imprime "Negativo" si el número es menor que 0.

    let variable = 1;
    console.log(variable < 0 ? "Negativo" : "Positivo");

    // 17. Crea una función que calcule el área de un triángulo con base y altura.

    function areaDelTriangulo(base, altura) {
        return (base * altura) / 2;
    }

    console.log(`El area del triángulo es ${areaDelTriangulo(12, 15)}`);

    // 18. Utiliza un bucle para imprimir los números impares del 1 al 15.

    for (i = 0; i <= 15; i++) {
        i % 2 != 0 ? console.log(i) : "";
    }

    // 19. Declara un arreglo de objetos (cada objeto representa una persona con nombre y edad) e imprímelo.
    let personas = [
        { nombre: "victor", edad: 12 },
        { nombre: "pepe", edad: 17 },
        { nombre: "sol", edad: 13 }
    ];

    console.log(personas);
    personas.forEach(persona => {
        console.log(persona);
    });

    // 20. Escribe una función que devuelva el máximo de tres números.

    function maxTresNumeros(a, b, c) {
        return Math.max(a, b, c);
    }
    console.log(maxTresNumeros(-7, -6, -3));
}