                    

/*DEFINICION DE VARIABLES PRECIO*/

const precioTortaEvento = 500;

const precioTortaAgasajo = 350;

const precioTortaPostres = 250;

const precioAlfajorChocolateNegro = 150;

const precioMiniAlfajorChocolateNegro = 130;

const precioAlfajorChocolatePremiun = 190;

const precioMiniAlfajorChocolatePremiun = 140;

const precioBombonChocolateNegro = 80;

const precioBombonChocolatePremiun = 90;

/*INICIAR VARIABLES PARA CICLO, SWITCH y FUNCIONES*/

let costoTotalCompra = 0;

let flag;

let kg;

let unidades;

const descuentoPorDocena = 0.10;

let precioConDescuento;

/*FUNCIONES*/

function porKilos (cantidad, precio) {

    cantidad = kg;

    total =  costoTotalCompra += (cantidad * precio);

    console.log("El total de su compra es de: $ ", total);
}


function descuento (precio) {

    let descuento = (precio * descuentoPorDocena);

    let precioConDescuento = (precio - descuento);

    return precioConDescuento;    
}


function porUnidades (cantidad, precio) {
    
    cantidad = unidades;

    if (unidades >= 12) {             
        
        total = costoTotalCompra += (cantidad * precioConDescuento);

        console.log("El total de su compra es de: $ ", total);

    } else {
            total = costoTotalCompra += (cantidad * precio);

            console.log("El total de su compra es de: $ ", total);
    } 
}

function mensajeKg (producto, precio) {

    kg = parseInt(prompt("De cuantos Kg quiere su torta?"));

    const compra = `${producto} ${kg} Kilos  a  $ ${precio} el kilo`;

    console.log(compra);  

}

function mensajeUnidades (producto, precio) {

    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));
    
    precioConDescuento = descuento(precio);    

    if (unidades < 12) {

        const compra = `${producto} ${unidades} Unidades  a  $ ${precio} la unidad`;

        console.log(compra); 
    } 
    
    else {

        const compra = `${producto} ${unidades} Unidades  a  $ ${precioConDescuento} la unidad a precio de descuento`;

        console.log(compra);
    }                  
}


/*CICLO DO WHILE CON CONDICIONALES, SWITCH Y FUNCIONES PARA SIMULAR LA COMPRA DE PRODUCTOS*/

do {
    /*MENU DE PRODUCTOS PARA COMPRAR O CONSULTAR*/

    const menu = parseInt(prompt(`Ingrese el número del articulo que desea comprar!!!: 
    1- Torta para Evento
    2- Torta para Agasajo
    3- Torta para Postres
    4- Alfajor Artesanal Chocolate Negro
    5- Mini Alfajor de Chocolate Negro
    6- Alfajor de chocolate Premiun
    7- Mini Alfajor de Chocolate Premiun
    8- Bombones de Chocolate Negro
    9- Bombones de Chocolate Premiun
    10- No deseo comprar nada
    `));
    
    /*SI SOLO QUIERE CONSULTAR Y NO COMPRAR MARCANDO 10*/

    if (menu == 10) {
    alert("Muchas Gracias Por Su Visita!!!");
    break; 
    } 
    
    /* SI MARCA OPCION INCORRECTA (NO HEMOS VISTO TRATATIEMTO DE ERRORES) PREGUNTA SI DESEA COMPRAR*/
  
    else if (menu < 1 || menu > 10) {
        alert(`Elija una opcion correcta del menu entre 1 y 9.
        Presione "Y" para continuar su compra o "N" para Salir`);
    }

    /*SI ELIGE ALGUN PRODUCTO DEL MENU ENTRA AL CICLO DE COMPRAS*/

    else (menu >= 1 && menu <=9); { 
    
    /*SWITCH CON CADA PRODCUTO Y SU CASUISTICA*/

    switch (menu) {

        case (1):
                                                    
                    mensajeKg("Torta para Evento", precioTortaEvento);

                    porKilos(kg, precioTortaEvento);
                                         
                    break;
        case (2):
                    
                    mensajeKg("Torta para Agasajos", precioTortaAgasajo);
                    
                    porKilos(kg, precioTortaAgasajo);
                                              
                    break;
        case (3):
                    
                    mensajeKg("Torta para Postres", precioTortaPostres);
                    
                    porKilos(kg, precioTortaPostres);
                                                  
                    break;
        case (4):
                    mensajeUnidades("Alfajor Artesanal Chocolate Negro", precioAlfajorChocolateNegro);                                  
                                     
                    porUnidades(unidades, precioAlfajorChocolateNegro);                    

                    break;
        case (5):
                    mensajeUnidades("Mini Alfajor de Chocolate Negro", precioMiniAlfajorChocolateNegro);

                    porUnidades(unidades, precioMiniAlfajorChocolateNegro);
                                
                    break;
        case (6):
                    mensajeUnidades("Alfajor de Chocolate Premiun", precioAlfajorChocolatePremiun);

                    porUnidades(unidades, precioAlfajorChocolatePremiun);
                                  
                    break;
        case (7):
                    mensajeUnidades("Mini Alfajor de Chocolate Premiun", precioMiniAlfajorChocolatePremiun);

                    porUnidades(unidades, precioMiniAlfajorChocolatePremiun);
                                  
                    break;
        case (8):
                    mensajeUnidades("Bombones de Chocolate Negro", precioBombonChocolateNegro);

                    porUnidades(unidades, precioBombonChocolateNegro);
                                  
                    break;
        case (9):
                    mensajeUnidades("Bombones de Chocolate Premiun", precioBombonChocolatePremiun);

                    porUnidades(unidades, precioBombonChocolatePremiun);
                                  
                    break;
        default:
            break;
    };

    /*REPREGUNTA AL USUARIO SI DESEA SEGUIR COMPRANDO O NO (CONTINUA CICLO O FINALIZA LA COMPRA)*/

    flag = prompt("¿Desea continuar comprando? Y/N");
        
    }

    /*WHILE CON METODO STRING POR SI USURIO INGRESA Y O N MINUSCULA NO ROMPA EL CICLO*/
    
} while (flag.toUpperCase() == "Y");





        



