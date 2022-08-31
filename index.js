alert ("Bienvenido a TENTO SUSHI");
let saludo = prompt ("Quieres conocer nuestro menú?");
while(saludo != "si"){
    alert("Entonces te invitamos a que conozcas nuestra pagina y te antojes de todo lo rico que tenemos para vos y tus amigues");
    saludo = prompt ("Quieres conocer nuestro menú?");
}

alert("A empezar entonces");


function menu () {
let menuSushi;
do {
    menuSushi = parseInt(prompt("Los especiales del dia son:\n1: 1 Tabla de 60 piezas variadas de salmón y pesca del dia $4000. \n2: 2 Tablas de 30 piezas, una de salmón y otra vegetariana + botella de vino blanco $6000. \n3: 1 Tabla de 30 piezas vegetarianas y venaganas + 2 latas de combucha $3000. \n4: 1 Tabla individual de 12 piezas + 8 piezas de regalo $2800" ))
}
while (menuSushi!=1 && menuSushi!=2 && menuSushi!=3 && menuSushi!=4)
switch (menuSushi) {
    case 1:
        return "tabla 1";
    case 2:
        return "tabla 2";
    case 3:
        return "tabla 3";
    case 4:
        return "tabla 4";
    }
}

function precio (menuSushi) {
    if (menuSushi === "tabla 1") {
        return 4000;
    }
    else if (menuSushi === "tabla 2") {
        return 6000;
    }
    else if (menuSushi === "Promo 3") {
        return 3000;
    }
    else if (menuSushi === "Promo 4") {
        return 2800;
    }
    else {
        console.log("No es una opción válida");
    }

}

alert("Ha sido una gran elección vas a disfrutar de " + sushi + "con un costo total de " + precio + "Por se tu primera compra te damos un descuento de $1000");

let descuento = 1000
const resta = (precio, descuento) => precio - descuento;
const iva = x => x * 0.21;

let precioFinal = resta((precio, descuento) * iva );
alert ("Puede pasar por su pedido en 40min, el saldo total es" + precioFinal);


