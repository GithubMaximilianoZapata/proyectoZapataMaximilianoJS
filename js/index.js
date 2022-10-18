                    

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

/*INICIAR VARIABLES PARA CICLO Y SWITCH*/

let costoTotalCompra = 0;

let flag;

let kg;

let unidades;

const descuentoPorDocena = 0.10;

/*CICLO CON CONDICIONALES Y SWITCH PARA SIMULAR LA COMPRA DE PRODUCTOS*/

do {
    const menu = parseInt(prompt(`Ingrese el número del articulo que desea comprar!!!: 
    1-Torta para Evento
    2-Torta para Agasajo
    3-Torta para Postres
    4-Alfajor Artesanal Chocolate Negro
    5-Mini Alfajor de Chocolate Negro
    6-Alfajor de chocolate Premiun
    7-Mini Alfajor de Chocolate Premiun
    8-Bombones de Chocolate Negro
    9-Bombones de Chocolate Premiun
    10-No deseo comprar nada
    `));                                  

    if (menu == 10) {
    alert("Muchas Gracias Por Su Visita!!!");
    break; 
    }               
  
    else if (menu < 1 || menu > 10) {
        alert(`Elija una opcion correcta del menu entre 1 y 9.
        Presiona "Y" para continuar tu compra o "N" para Salir`);
    }

    else (menu >= 1 && menu <=9); {     

    switch (menu) {
        case (1):
                    kg = parseInt(prompt("De cuantos Kg quiere su torta?"));

                    costoTotalCompra += (kg * precioTortaEvento);

                    console.log(costoTotalCompra);
                      
                    break;
        case (2):
                    kg = parseInt(prompt("De cuantos Kg quiere su torta?"));

                    costoTotalCompra += (kg * precioTortaAgasajo);

                    console.log(costoTotalCompra);
                          
                    break;
        case (3):
                    kg = parseInt(prompt("De cuantos Kg quiere su torta?"));

                    costoTotalCompra += (kg * precioTortaPostres);

                    console.log(costoTotalCompra);
                              
                    break;
        case (4):
                    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

                    if (unidades >= 12) {

                        let descuento = (precioAlfajorChocolateNegro * descuentoPorDocena);

                        let precioFinal = (precioAlfajorChocolateNegro - descuento);

                        costoTotalCompra += (unidades * precioFinal);

                        console.log(costoTotalCompra);

                    } else {
                            costoTotalCompra += (unidades * precioAlfajorChocolateNegro);

                            console.log(costoTotalCompra);
                    } 

                    break;
        case (5):
                    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

                    if (unidades >= 12) {

                        let descuento = (precioMiniAlfajorChocolateNegro * descuentoPorDocena);

                        let precioFinal = (precioMiniAlfajorChocolateNegro - descuento);

                        costoTotalCompra += (unidades * precioFinal);

                        console.log(costoTotalCompra);

                    } else {
                            costoTotalCompra += (unidades * precioMiniAlfajorChocolateNegro);

                            console.log(costoTotalCompra);
                    }     
                                
                    break;
        case (6):
                    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

                    if (unidades >= 12) {

                        let descuento = (precioAlfajorChocolatePremiun * descuentoPorDocena);

                        let precioFinal = (precioAlfajorChocolatePremiun - descuento);

                        costoTotalCompra += (unidades * precioFinal);

                        console.log(costoTotalCompra);

                    } else {
                            costoTotalCompra += (unidades * precioAlfajorChocolatePremiun);

                            console.log(costoTotalCompra);
                    }     
                                  
                    break;
        case (7):
                    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

                    if (unidades >= 12) {

                        let descuento = (precioMiniAlfajorChocolatePremiun * descuentoPorDocena);

                        let precioFinal = (precioMiniAlfajorChocolatePremiun - descuento);

                        costoTotalCompra += (unidades * precioFinal);

                        console.log(costoTotalCompra);

                    } else {
                            costoTotalCompra += (unidades * precioMiniAlfajorChocolatePremiun);

                            console.log(costoTotalCompra);
                    }     
                                  
                    break;
        case (8):
                    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

                    if (unidades >= 12) {

                        let descuento = (precioBombonChocolateNegro * descuentoPorDocena);

                        let precioFinal = (precioBombonChocolateNegro - descuento);

                        costoTotalCompra += (unidades * precioFinal);

                        console.log(costoTotalCompra);

                    } else {
                            costoTotalCompra += (unidades * precioBombonChocolateNegro);

                            console.log(costoTotalCompra);
                    }     
                                  
                    break;
        case (9):
                    unidades = parseInt(prompt("Cuantas unidades desea comprar?"));

                    if (unidades >= 12) {

                        let descuento = (precioBombonChocolatePremiun * descuentoPorDocena);

                        let precioFinal = (precioBombonChocolatePremiun - descuento);

                        costoTotalCompra += (unidades * precioFinal);

                        console.log(costoTotalCompra);

                    } else {
                            costoTotalCompra += (unidades * precioBombonChocolatePremiun);

                            console.log(costoTotalCompra);
                    }     
                                  
                    break;
        default:
            break;
    };

    flag = prompt("¿Desea continuar comprando? Y/N");
        
    }
    
} while (flag.toUpperCase() == "Y");






    

        



