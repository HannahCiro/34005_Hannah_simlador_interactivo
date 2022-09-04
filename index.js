alert ("Bienvenido a TENTO SUSHI");

let usuario = prompt("¿Como te llamas?");
let mail = prompt("Cual es tu mail?");
let tabla = 0;
let valComida = 0;
let valBebida = 0;
let valortotal = 0;

function confirDatos () {
    let confirUsuario = prompt(`${usuario} ¿estas preparad@ para una nueva experiencía?`);
    if (confirUsuario.toLowerCase () === "si"){
    alert ("Genial, continuemos... No te vas a arrepentir");
    }else{
    alert (`No pasa nada ${usuario} .  Te invitamos a que des un recorrido por nuestra pagina. Nos vemos pronto`);
    }
}
confirDatos();

function pedidoComidas() {
    let menuComidas;
    do { 
        menuComidas = parseInt(prompt("NUESTRAS TABLAS DEL DÍA SON: \n\
        1: Tablas de 60 piezas variadas de salmón y pesca del dia $9520. \n\
        2: Tablas de 30 piezas, una de salmón y otra vegetariana $9000. \n\
        3: Tablas de 30 piezas vegetarianas y veganas $4000. \n\
        4: Tablas individual de 12 piezas + 8 piezas de regalo $2440"));
    }
    while (menuComidas!=1 && menuComidas!=2 && menuComidas!=3 && menuComidas!=4);
    switch (menuComidas){

        case 1:
        valComida += 9520;
        return (valComida);
        break;

        case 2: 
        valComida += 9000;
        return (valComida);
        break;

        case 3: 
        valComida += 9520;
        return (valComida);
        break;

        case 4: 
        valComida += 2440;
        return (valComida);
        break;

        default: alert("No es una opcion valida");
        break;
    }
}

function pedidoBebidas() {
let menuBebidas;

    do {
        menuBebidas = parseInt(prompt("NUESTRAS BEBIDAS DEL DÍA SON: \n\
        1: 1 Botella de vino tinto Malbec $2000. \n\
        2: 2 Latas de combucha $1500. \n\
        3: 2 Botellas de cerveza Corona $2000. \n\
        4: 1 Botella de gaseosa + 1 botella de agua $1000"));
    }
    while (menuBebidas!=1 && menuBebidas!=2 && menuBebidas!=3 && menuBebidas!=4);
            
    switch (menuBebidas){

        case 1: 
        valBebida += 2000;
        return(valBebida);
        break;

        case 2: 
        valBebida += 1500;
        return(valBebida);
        break;

        case 3: 
        valBebida += 2000;
        return(valBebida);
        break;

        case 4: 
        valBebida += 1000;
        return(valBebida);
        break;

        default: alert("No es una opcion valida");
        break;
    }
}
       
let resumenPago = pedidoComidas() + pedidoBebidas();


function validarCompra(){
    let validar = (prompt("Has hecho una gran elección. Desea pagar con: \n\ Tajeta + $300 de recargo \n\ Efectivo"))
    if (validar.toLowerCase() === "tarjeta"){
        alert(resumenPago + 300); 
    } else {
        alert(resumenPago);
    }
}
validarCompra();
 
let mensaje = alert(`Muchas gracias por su compra. Le estaremos enviando la factura a su casilla de correo ${mail}`);